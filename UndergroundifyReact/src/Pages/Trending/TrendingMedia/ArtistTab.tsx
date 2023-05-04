import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TrendingArtist from "../../../Components/Cards/Artists/TrendingArtist";

const RecommendedTrackTab = (props: any) => {
  const { artistList } = props;

  return (
    <div>
      <Typography sx={{ marginLeft: "15px", mb: 2, mt: 1 }} variant="h5">
        Artists
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
          {artistList?.map((e: any) => (
            <TrendingArtist
              deleteLike={props.deleteLike}
              createLike={props.createLike}
              artist={e}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecommendedTrackTab;
