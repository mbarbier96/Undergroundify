import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchAlbum from "../../../Components/Cards/Albums/SearchAlbum";
import { useFetchSearchAlbum } from "../../../Queries/Albums/useFetchSearchAlbum";

const SearchAlbumTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;
  const { searchString } = props;

  const {
    data: trackList,
    error: trackListError,
    isLoading: isLoadingTrackList,
  } = useFetchSearchAlbum(searchString, null);

  return (
    <div
      className="container fluid"
      style={{ height: "47rem", overflowX: "hidden", overflowY: "scroll" }}
    >
      <Row className="">
        {trackList?.map((e: any) => (
          <SearchAlbum album={e} />
        ))}
      </Row>
    </div>
  );
};

export default SearchAlbumTab;
