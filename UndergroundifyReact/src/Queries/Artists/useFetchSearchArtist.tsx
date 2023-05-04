import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (artist: string | null) => {
  return `${spotifyMethods.searchArtist}?artist=${artist}`;
};

export const useFetchSearchArtist = (artist: string | null) => {
  const res = useQuery(
    ["searchArtist", artist],
    () => get(getParams(artist)).then((res) => res.data),
    { enabled: artist !== null }
  );

  return res;
};
