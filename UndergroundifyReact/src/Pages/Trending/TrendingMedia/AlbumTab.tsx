import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TrendingAlbum from "../../../Components/Cards/Albums/TrendingAlbum";

const RecommendedTrackTab = (props: any) => {
  const { albumList } = props;

  return (
    <div>
      <Typography sx={{ marginLeft: "15px", mb: 2, mt: 1 }} variant="h5">
        Albums
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
          {albumList?.map((e: any) => (
            <TrendingAlbum
              deleteLike={props.deleteLike}
              createLike={props.createLike}
              album={e}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecommendedTrackTab;
