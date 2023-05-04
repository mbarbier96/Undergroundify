import { useMutation, useQueryClient } from "react-query";
import { Like } from "../../Interfaces/Like";
import { post, likeMethods } from "../../APIHelper/API";

export const useCreateLike = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (like: Like) => {
      return post(likeMethods.postUserLike, like).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("RecommendedTracks");
        queryClient.invalidateQueries("RecommendedAlbums");
        queryClient.invalidateQueries("RecommendedArtists");
        queryClient.invalidateQueries("UserLikedTracks");
        queryClient.invalidateQueries("UserLikedAlbums");
        queryClient.invalidateQueries("UserLikedArtists");
      },
    }
  );
};
