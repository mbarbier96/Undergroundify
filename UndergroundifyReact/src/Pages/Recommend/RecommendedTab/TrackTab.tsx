import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RecommendedSong from "../../../Components/Cards/Tracks/RecommendedSong";
import { useFetchRecommendedTrackByUser } from "../../../Queries/RecommendedMedia/useFetchRecommendedTrackByUser";

const RecommendedTrackTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;

  const {
    data: trackList,
    error: trackListError,
    isLoading: isLoadingTrackList,
  } = useFetchRecommendedTrackByUser(1);

  return (
    <div>
      <div
        style={{
          height: "47rem",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <Row>
          {trackList?.map((e: any) => (
            <RecommendedSong
              audioPlayingId={audioPlayingId}
              setAudioPlayingId={setAudioPlayingId}
              track={e}
            />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedTrackTab;
