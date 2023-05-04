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

const SearchAlbum = (props: any) => {
  const { artist } = props;

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
        sx={{
          borderRadius: "50%",
          height: 180,
          width: 180,
          display: "block",
          marginTop: 1,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component="img"
        alt="artistImage"
        image={artist?.images[0]?.url}
      />
      <CardContent sx={{ marginBottom: 7, paddingBottom: 0, paddingTop: 1.5 }}>
        <Typography
          sx={{ margin: 0 }}
          component="div"
          variant="body2"
          color="text.primary"
        >
          {artist?.artistName}
        </Typography>
        <Typography
          sx={{ margin: 0 }}
          component="div"
          variant="body2"
          color="text.secondary"
        >
          {`Popularity: ${artist.popularity}%`}
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
                artist?.artistId,
                "artist",
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
