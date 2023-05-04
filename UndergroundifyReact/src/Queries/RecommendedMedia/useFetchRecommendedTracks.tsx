import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = () => {
  return `${spotifyMethods.recommendedSongs}`;
};

export const useFetchRecommendedTracks = () => {
  const res = useQuery(
    ["RecommendedTracks"],
    () => get(getParams()).then((res) => res.data),
    { enabled: true }
  );

  return res;
};
