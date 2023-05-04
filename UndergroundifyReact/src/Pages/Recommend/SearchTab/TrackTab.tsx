import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchSong from "../../../Components/Cards/Tracks/SearchSong";
import { useFetchSearchTrack } from "../../../Queries/Tracks/useFetchSearchTrack";

const SearchTrackTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;
  const { searchString } = props;

  const {
    data: trackList,
    error: trackListError,
    isLoading: isLoadingTrackList,
  } = useFetchSearchTrack(searchString, null);

  return (
    <div
      className="container fluid"
      style={{ height: "47rem", overflowX: "hidden", overflowY: "scroll" }}
    >
      <Row className="">
        {trackList?.map((e: any) => (
          <SearchSong
            audioPlayingId={audioPlayingId}
            setAudioPlayingId={setAudioPlayingId}
            track={e}
          />
        ))}
      </Row>
    </div>
  );
};

export default SearchTrackTab;
