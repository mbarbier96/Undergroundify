import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (id: number | null) => {
  return `${spotifyMethods.userRecommendedSongs}?userId=${id}`;
};

export const useFetchRecommendedTrackByUser = (id: number | null) => {
  const res = useQuery(
    ["UserRecommendedTracks", id],
    () => get(getParams(id)).then((res) => res.data),
    { enabled: id !== null }
  );

  return res;
};
