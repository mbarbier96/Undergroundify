import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import RecommendedAlbumTab from "./AlbumTab";
import RecommendedTrackTab from "./TrackTab";
import RecommendedArtistTab from "./ArtistTab";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";

const RecommendedMedia = (props: any) => {
  const { tabValue, setTabValue } = props;
  const { setAudioPlayingId, audioPlayingId } = props;

  return (
    <div>
      <Row>
        <Typography className="mt-3 ml-3" variant="h6" gutterBottom>
          Recommended By You
        </Typography>
      </Row>
      {tabValue === MediaTabEnum.Tracks && (
        <RecommendedTrackTab
          setAudioPlayingId={setAudioPlayingId}
          audioPlayingId={audioPlayingId}
        />
      )}
      {tabValue === MediaTabEnum.Albums && <RecommendedAlbumTab />}
      {tabValue === MediaTabEnum.Artists && <RecommendedArtistTab />}
    </div>
  );
};

export default RecommendedMedia;
