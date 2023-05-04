import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userRecommendedArtists}?userId=${id}`;
};

export const useFetchRecommendedArtistsByUser = (id: number | null) => {
  const res = useQuery(
    ["UserRecommendedArtists", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
