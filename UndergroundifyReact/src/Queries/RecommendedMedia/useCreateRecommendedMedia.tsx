import { useMutation, useQueryClient } from "react-query";
import { RecommendMedia } from "../../Interfaces/RecommendMedia";
import { post, spotifyMethods } from "../../APIHelper/API";

export const useCreateRecommendedMedia = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (recommendMedia: RecommendMedia) => {
      return post(spotifyMethods.recommendMedia, recommendMedia).then(
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
