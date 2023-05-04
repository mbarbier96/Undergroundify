import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RecommendedArtist from "../../../Components/Cards/Artists/RecommendedArtist";
import { useFetchRecommendedArtistsByUser } from "../../../Queries/RecommendedMedia/useFetchRecommendedArtistsByUser";

const RecommendedArtistTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;

  const {
    data: artistList,
    error: artistListError,
    isLoading: isLoadingArtistList,
  } = useFetchRecommendedArtistsByUser(1);

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
          {artistList?.map((e: any) => (
            <RecommendedArtist artist={e} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedArtistTab;
