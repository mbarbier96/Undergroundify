import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getTabLabel } from "../../Recommend/HelperFunctions";
import LikedAlbum from "../../../Components/Cards/Albums/LikedAlbum";
import { useFetchLikedRecommendedUserAlbums } from "../../../Queries/Likes/useFetchLikedRecommendedUserAlbums";

const AlbumTab = (props: any) => {
  const { deleteLike } = props;

  const {
    data: likedList,
    error: likedListError,
    isLoading: isLoadinglikedList,
  } = useFetchLikedRecommendedUserAlbums(1);

  return (
    <>
      {likedList?.map((e: any) => (
        <LikedAlbum deleteLike={deleteLike} album={e} />
      ))}
    </>
  );
};

export default AlbumTab;
