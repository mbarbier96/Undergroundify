import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getTabLabel } from "../../Recommend/HelperFunctions";
import LikedArtist from "../../../Components/Cards/Artists/LikedArtist";
import { useFetchLikedRecommendedUserArtists } from "../../../Queries/Likes/useFetchLikedRecommendedUserArtists";

const ArtistTab = (props: any) => {
  const { deleteLike } = props;

  const {
    data: likedList,
    error: likedListError,
    isLoading: isLoadinglikedList,
  } = useFetchLikedRecommendedUserArtists(1);

  return (
    <>
      {likedList?.map((e: any) => (
        <LikedArtist deleteLike={deleteLike} artist={e} />
      ))}
    </>
  );
};

export default ArtistTab;
