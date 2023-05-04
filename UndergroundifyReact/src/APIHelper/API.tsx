import axios from "axios";

const ax = axios.create();

const apiUrl = "http://localhost:5000/api/";

export const spotifyMethods = {
  searchSong: "spotify/searchSong",
  searchAlbum: "spotify/searchAlbum",
  searchArtist: "spotify/searchArtist",
  recommendMedia: "recommendedMedia/recommendMedia/",
  userRecommendedSongs: "recommendedMedia/userRecommendedSongs",
  userRecommendedAlbums: "recommendedMedia/userRecommendedAlbums",
  userRecommendedArtists: "recommendedMedia/userRecommendedArtists",
  recommendedSongs: "recommendedMedia/recommendedSongs",
  recommendedArtists: "recommendedMedia/recommendedArtists",
  recommendedAlbums: "recommendedMedia/recommendedAlbums",
  userLikedTracks: "recommendedMedia/userLikedTracks",
  userLikedAlbums: "recommendedMedia/userLikedAlbums",
  userLikedArtists: "recommendedMedia/userLikedArtists",
  deleteRecommendedMedia: "recommendedMedia/deleteRecommended",
};

export const likeMethods = {
  postUserLike: "likes/postUserLike/",
  deleteUserLike: "likes/deleteUserLike",
};

const getAuth = () => {
  return "Bearer BQC8VsWPm8Xu8pkk2HjpvG9G3-HzFGt8-4qnuXorWidwvfplS51RlbRzUBCFoWrUzTePnwCdl9d3gFDSDx2im5SjS3A_erevva5oSqJ_VCGQWQ5UbFY-M0kQKc-x65uiB_0aS-12PtlKB1qdbw2il7KxZrHSVxNRxMpGPfcKuse8f8TqKMkCW-WBtxHaLXyds6xeS_REQbOHsHxs72gSrjfNhH2psW8j6yLEAaChEYJ7I4ZmsYg_vYKKFkt9X2VfdWbNNVfuDVT1jiadw-FrMkWUpQ7O_tijxUly3DBaHe1XT9dMGN1NwnHQrjLSzgiybiWtZXcSwbPeka3BjSI2S_CnSUMKRbIV2DOEMel7n1NJT4Q";
};

const headers = {
  Authorization: getAuth(),
  "Content-Type": "application/json",
};

export const post = (method: string, values: any) => {
  return ax.post(`${apiUrl}${method}`, values, { headers: headers });
};

export const get = (method: string) => {
  return ax.get(`${apiUrl}${method}`, { headers: headers });
};

export const del = (method: string) => {
  return ax.delete(`${apiUrl}${method}`, { headers: headers });
};
