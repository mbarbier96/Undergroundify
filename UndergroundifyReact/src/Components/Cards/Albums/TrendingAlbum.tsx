import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Container, Col, Row } from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { useCreateLike } from "../../../Queries/Likes/useCreateLike";
import { useDeleteLike } from "../../../Queries/Likes/useDeleteLike";
import { handlePlayPause } from "../../../Pages/Recommend/HelperFunctions";
import Box from "@mui/material/Box";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { createLikeObj, Like } from "../../../Interfaces/Like";
import {
  getName,
  getUserLiked,
  handleLikeUnlike,
} from "../../../Pages/Trending/HelperFunctions";

const TrendingAlbum = (props: any) => {
  const { album } = props;
  const [userLiked, setUserLiked] = useState<Like | null>(null);

  const { createLike, deleteLike } = props;

  useEffect(() => {
    setUserLiked(getUserLiked(album.likes, album.albumId));
  }, [album.likes]);

  return (
    <Box sx={{ width: 200, mr: 2, p: 0 }}>
      <Card variant="outlined">
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            alt="albumImage"
            height="120"
            image={album.albumImages[0].url}
          />
        </Box>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            {getName(album.albumName, null)}
          </Typography>
          <Typography
            sx={{ fontSize: 12.5 }}
            color="text.secondary"
            gutterBottom
          >
            {getName(
              album?.artists.map((a: any) => a.artistName).join(", "),
              null
            )}
          </Typography>
          <Row className="m-0 p-0">
            <Typography
              sx={{ fontSize: 16, mr: 1, paddingTop: "6px" }}
              color="text.primary"
            >
              {album.likes?.length}
            </Typography>
            <IconButton
              sx={{ m: 0, p: 0 }}
              onClick={() =>
                handleLikeUnlike(
                  createLikeObj(album?.albumId, "album", 1),
                  userLiked,
                  createLike,
                  deleteLike
                )
              }
            >
              {userLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
            </IconButton>
          </Row>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TrendingAlbum;
