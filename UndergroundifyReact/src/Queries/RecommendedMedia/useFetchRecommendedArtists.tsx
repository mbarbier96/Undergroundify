import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = () => {
  return `${spotifyMethods.recommendedArtists}`;
};

export const useFetchRecommendedArtists = () => {
  const res = useQuery(
    ["RecommendedArtists"],
    () => get(getParams()).then((res) => res.data),
    { enabled: true }
  );

  return res;
};
