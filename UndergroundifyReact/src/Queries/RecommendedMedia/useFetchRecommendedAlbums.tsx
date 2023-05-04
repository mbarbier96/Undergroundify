import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = () => {
  return `${spotifyMethods.recommendedAlbums}`;
};

export const useFetchRecommendedAlbums = () => {
  const res = useQuery(
    ["RecommendedAlbums"],
    () => get(getParams()).then((res) => res.data),
    { enabled: true }
  );

  return res;
};
