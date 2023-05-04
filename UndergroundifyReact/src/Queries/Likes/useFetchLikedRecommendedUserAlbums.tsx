import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userLikedAlbums}?userId=${id}`;
};

export const useFetchLikedRecommendedUserAlbums = (id: number | null) => {
  const res = useQuery(
    ["UserLikedAlbums", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
