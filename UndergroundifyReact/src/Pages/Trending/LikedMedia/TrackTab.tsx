import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getTabLabel } from "../../Recommend/HelperFunctions";
import LikedTrack from "../../../Components/Cards/Tracks/LikedSong";
import { useFetchLikedRecommendedUserTracks } from "../../../Queries/Likes/useFetchLikedRecommendedUserTracks";

const TrackTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;
  const { deleteLike } = props;

  const {
    data: likedTrackList,
    error: likedTrackListError,
    isLoading: isLoadinglikedTrackList,
  } = useFetchLikedRecommendedUserTracks(1);

  return (
    <>
      {likedTrackList?.map((e: any) => (
        <LikedTrack
          deleteLike={deleteLike}
          audioPlayingId={audioPlayingId}
          setAudioPlayingId={setAudioPlayingId}
          track={e}
        />
      ))}
    </>
  );
};

export default TrackTab;
