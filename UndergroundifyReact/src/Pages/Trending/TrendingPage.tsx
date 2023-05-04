import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TrackTab from "./TrendingMedia/TrackTab";
import AlbumTab from "./TrendingMedia/AlbumTab";
import ArtistTab from "./TrendingMedia/ArtistTab";
import { useCreateLike } from "../../Queries/Likes/useCreateLike";
import { useDeleteLike } from "../../Queries/Likes/useDeleteLike";
import { useFetchRecommendedTracks } from "../../Queries/RecommendedMedia/useFetchRecommendedTracks";
import { useFetchRecommendedAlbums } from "../../Queries/RecommendedMedia/useFetchRecommendedAlbums";
import { useFetchRecommendedArtists } from "../../Queries/RecommendedMedia/useFetchRecommendedArtists";
import LikedTab from "./LikedMedia/LikedMediaTab";

const TrendingPage = () => {
  const [audioPlayingId, setAudioPlayingId] = useState(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const createLike = useCreateLike();
  const deleteLike = useDeleteLike();

  //Audio pause and play functionality
  useEffect(() => {
    audio?.pause();
    if (audioPlayingId) {
      const tmpAudio = new Audio(audioPlayingId);
      tmpAudio.play();
      setAudio(tmpAudio);
    } else {
      setAudio(null);
    }
  }, [audioPlayingId]);
  //Audio pause and play end

  const {
    data: trendingTrackList,
    error: trendingTrackListError,
    isLoading: isLoadingTrendingTrackList,
  } = useFetchRecommendedTracks();

  const {
    data: trendingAlbumList,
    error: trendingAlbumListError,
    isLoading: isLoadingTrendingAlbumList,
  } = useFetchRecommendedAlbums();

  const {
    data: trendingArtistList,
    error: trendingArtistListError,
    isLoading: isLoadingTrendingArtistList,
  } = useFetchRecommendedArtists();

  return (
    <>
      <Row>
        <Col className="mr-5" xs={7}>
          <TrackTab
            trackList={trendingTrackList}
            createLike={createLike}
            deleteLike={deleteLike}
            audioPlayingId={audioPlayingId}
            setAudioPlayingId={setAudioPlayingId}
          />
          <AlbumTab
            albumList={trendingAlbumList}
            createLike={createLike}
            deleteLike={deleteLike}
          />
          <ArtistTab
            artistList={trendingArtistList}
            createLike={createLike}
            deleteLike={deleteLike}
          />
        </Col>
        <Col xs={4}>
          <LikedTab
            audioPlayingId={audioPlayingId}
            setAudioPlayingId={setAudioPlayingId}
            deleteLike={deleteLike}
          />
        </Col>
      </Row>
    </>
  );
};

export default TrendingPage;
