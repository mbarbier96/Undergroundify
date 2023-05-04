import { Like } from "../../Interfaces/Like";

export const getName = (name: string, readMore: boolean | null) => {
  if (!readMore && name.length > 22) return `${name.substring(0, 22)}...`;
  return name;
};

export const getUserLiked = (likes: Array<Like>, spotifyId: string) => {
  const userLike = likes.find((like) => like.spotifyId === spotifyId);
  return userLike ? userLike : null;
};

export const handleLikeUnlike = (
  like: Like,
  userLike: Like | null,
  createLike: any,
  deleteLike: any
) => {
  if (userLike && userLike.id !== null) {
    deleteLike.mutate(userLike.id);
  } else {
    createLike.mutate(like);
  }
};
