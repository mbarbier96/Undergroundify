import { useQuery } from "react-query";
import { get, spotifyMethods } from "../../APIHelper/API";

const getParams = (albumName: string | null, artist: string | null) => {
  return `${spotifyMethods.searchAlbum}?album=${albumName}&artist=${artist}`;
};

export const useFetchSearchAlbum = (
  albumName: string | null,
  artist: string | null
) => {
  const res = useQuery(
    ["searchAlbum", albumName],
    () => get(getParams(albumName, artist)).then((res) => res.data),
    { enabled: albumName !== null }
  );

  return res;
};
