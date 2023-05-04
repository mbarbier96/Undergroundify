import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userLikedTracks}?userId=${id}`;
};

export const useFetchLikedRecommendedUserTracks = (id: number | null) => {
  const res = useQuery(
    ["UserLikedTracks", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
