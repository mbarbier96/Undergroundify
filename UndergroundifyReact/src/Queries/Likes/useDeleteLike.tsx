import { useMutation, useQueryClient } from "react-query";
import { RecommendMedia } from "../../Interfaces/RecommendMedia";
import { get, likeMethods, spotifyMethods } from "../../APIHelper/API";

export const useDeleteLike = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: number) => {
      return get(`${likeMethods.deleteUserLike}?id=${id}`).then(
        (res) => res.data
      );
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
