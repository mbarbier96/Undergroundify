export interface Like {
  id: number | null;
  spotifyId: string;
  mediaType: string;
  likedBy: number;
}

export const createLikeObj = (
  spotifyId: string,
  mediaType: string,
  likedBy: number
) => {
  const recommendMedia: Like = {
    id: null,
    spotifyId: spotifyId,
    mediaType: mediaType,
    likedBy: likedBy,
  };
  return recommendMedia;
};
