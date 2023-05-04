import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TrendingTrack from "../../../Components/Cards/Tracks/TrendingSong";

const RecommendedTrackTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;
  const { trackList } = props;

  return (
    <div>
      <Typography sx={{ marginLeft: "15px", mb: 2, mt: 2 }} variant="h5">
        Tracks
      </Typography>
      <Container
        className="m-0 p-0"
        style={{
          height: "16rem",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        <Row style={{ marginLeft: 10, flex: "0 0 auto" }}>
          {trackList?.map((e: any) => (
            <TrendingTrack
              audioPlayingId={audioPlayingId}
              setAudioPlayingId={setAudioPlayingId}
              deleteLike={props.deleteLike}
              createLike={props.createLike}
              track={e}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecommendedTrackTab;
