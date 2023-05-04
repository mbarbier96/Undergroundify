import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userRecommendedAlbums}?userId=${id}`;
};

export const useFetchRecommendedAlbumsByUser = (id: number | null) => {
  const res = useQuery(
    ["UserRecommendedAlbums", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
