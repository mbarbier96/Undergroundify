import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
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

const SearchSong = (props: any) => {
  const { track } = props;
  const { audioPlayingId, setAudioPlayingId } = props;

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
      variant="outlined"
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="albumImage"
          height="150"
          image={track?.album.albumImages[0].url}
        />
        <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
          <IconButton
            aria-label="play-pause"
            onClick={() =>
              handlePlayPause(
                track.previewUrl,
                audioPlayingId,
                setAudioPlayingId,
                track.previewUrl
              )
            }
            size="small"
          >
            {audioPlayingId === track.previewUrl ? (
              <StopCircleIcon
                sx={{
                  color: "#1DB954",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  borderWidth: "0px",
                  "&:hover": { color: "white" },
                }}
                fontSize="large"
              />
            ) : (
              <PlayCircleIcon
                sx={{
                  color: "#1DB954",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  borderWidth: "0px",
                  "&:hover": { color: "white" },
                }}
                fontSize="large"
              />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardContent sx={{ marginBottom: 7, paddingBottom: 0, paddingTop: 1.5 }}>
        <Typography
          sx={{ margin: 0 }}
          component="div"
          variant="body2"
          color="text.primary"
        >
          {track?.trackName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {track?.artists.map((a: any) => a.artistName).join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {track?.albumName}
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
                track?.trackId,
                "track",
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

export default SearchSong;
