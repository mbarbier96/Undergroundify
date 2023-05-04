import { useMutation, useQueryClient } from "react-query";
import { RecommendMedia } from "../../Interfaces/RecommendMedia";
import { get, spotifyMethods } from "../../APIHelper/API";

export const useDeleteRecommendedMedia = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: number) => {
      return get(`${spotifyMethods.deleteRecommendedMedia}?id=${id}`).then(
        (res) => res.data
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("UserRecommendedTracks");
        queryClient.invalidateQueries("UserRecommendedAlbums");
        queryClient.invalidateQueries("UserRecommendedArtists");
      },
    }
  );
};
