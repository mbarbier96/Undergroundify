import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RecommendedAlbum from "../../../Components/Cards/Albums/RecommendedAlbum";
import { useFetchRecommendedAlbumsByUser } from "../../../Queries/RecommendedMedia/useFetchRecommendedAlbumsByUser";

const RecommendedAlbumTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;

  const {
    data: albumList,
    error: albumListError,
    isLoading: isLoadingAlbumList,
  } = useFetchRecommendedAlbumsByUser(1);

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
          {albumList?.map((e: any) => (
            <RecommendedAlbum album={e} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedAlbumTab;
