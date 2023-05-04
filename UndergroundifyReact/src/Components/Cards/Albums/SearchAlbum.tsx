import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { useCreateRecommendedMedia } from "../../../Queries/RecommendedMedia/useCreateRecommendedMedia";
import moment from "moment";
import {
  RecommendMedia,
  createRecommendMediaObj,
} from "../../../Interfaces/RecommendMedia";
import { handlePlayPause } from "../../../Pages/Recommend/HelperFunctions";

const SearchAlbum = (props: any) => {
  const { album } = props;

  const createRecommendMedia = useCreateRecommendedMedia();

  const handleRecommendMedia = (recommendMedia: RecommendMedia) => {
    createRecommendMedia.mutate(recommendMedia);
  };

  return (
    <Card
      sx={{
        marginRight: 3,
        marginBottom: 3,
        width: 245,
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        alt="albumImage"
        height="150"
        image={album?.albumImages[0].url}
      />
      <CardContent sx={{ marginBottom: 7, paddingBottom: 0, paddingTop: 1.5 }}>
        <Typography
          sx={{ margin: 0 }}
          component="div"
          variant="body2"
          color="text.primary"
        >
          {album?.albumName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${moment(album.albumReleaseDate).format("YYYY")} - ${album?.artists
            .map((a: any) => a.artistName)
            .join(", ")}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0 }}>
        <Button
          sx={{
            color: "white",
            "&:hover": { color: "#1DB954", borderColor: "#1DB954" },
            "&:focus": { outline: "none" },
            borderColor: "white",
            fontSize: 12,
          }}
          size="small"
          variant="outlined"
          onClick={() =>
            handleRecommendMedia(
              createRecommendMediaObj(
                album?.albumId,
                "album",
                1,
                moment().format("DD-MM-yyyy")
              )
            )
          }
        >
          Recommend
        </Button>
      </CardActions>
    </Card>
  );
};

export default SearchAlbum;
