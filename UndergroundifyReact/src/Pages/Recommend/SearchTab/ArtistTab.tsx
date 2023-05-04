import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchArtist from "../../../Components/Cards/Artists/SearchArtist";
import { useFetchSearchArtist } from "../../../Queries/Artists/useFetchSearchArtist";

const SearchArtistTab = (props: any) => {
  const { audioPlayingId, setAudioPlayingId } = props;
  const { searchString } = props;

  const {
    data: artistList,
    error: artistListError,
    isLoading: isLoadingArtistList,
  } = useFetchSearchArtist(searchString);

  return (
    <div
      className="container fluid"
      style={{ height: "47rem", overflowX: "hidden", overflowY: "scroll" }}
    >
      <Row className="">
        {artistList?.map((e: any) => (
          <SearchArtist artist={e} />
        ))}
      </Row>
    </div>
  );
};

export default SearchArtistTab;
