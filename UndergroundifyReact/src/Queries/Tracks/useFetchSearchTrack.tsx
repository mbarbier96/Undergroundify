import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (trackName: string | null, artist: string | null) => {
  return `${spotifyMethods.searchSong}?song=${trackName}&artist=${artist}`;
};

export const useFetchSearchTrack = (
  trackName: string | null,
  artist: string | null
) => {
  const res = useQuery(
    ["SearchSong", trackName],
    () => get(getParams(trackName, artist)).then((res) => res.data),
    { enabled: trackName !== null }
  );

  return res;
};
