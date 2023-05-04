import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userLikedArtists}?userId=${id}`;
};

export const useFetchLikedRecommendedUserArtists = (id: number | null) => {
  const res = useQuery(
    ["UserLikedArtists", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
