export interface RecommendMedia {
  spotifyId: string;
  mediaType: string;
  recommendedBy: number;
  recommendedDate: string;
}

export const createRecommendMediaObj = (
  spotifyId: string,
  mediaType: string,
  recommendedBy: number,
  recommendedDate: string
) => {
  const recommendMedia: RecommendMedia = {
    spotifyId: spotifyId,
    mediaType: mediaType,
    recommendedBy: recommendedBy,
    recommendedDate: recommendedDate,
  };
  return recommendMedia;
};
