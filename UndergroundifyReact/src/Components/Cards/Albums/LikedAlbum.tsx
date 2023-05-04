import React, { useEffect, useState } from "react";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { handlePlayPause } from "../../../Pages/Recommend/HelperFunctions";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  getUserLiked,
  handleLikeUnlike,
} from "../../../Pages/Trending/HelperFunctions";
import { Like } from "../../../Interfaces/Like";

export default function MediaControlCard(props: any) {
  const { album } = props;
  const { audioPlayingId, setAudioPlayingId } = props;
  const [userLiked, setUserLiked] = useState<Like | null>(
    getUserLiked(album.likes, album.albumId)
  );
  const { deleteLike } = props;

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        marginBottom: 2,
        width: 450,
        ml: 2,
      }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={album?.albumImages[0].url}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="body2" color="text.primary" component="div">
            {album?.albumName}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {album?.artists.map((a: any) => a.artistName).join(", ")}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton
            sx={{ m: 0, p: 0 }}
            onClick={() => deleteLike.mutate(userLiked?.id)}
          >
            <ThumbUpIcon />
          </IconButton>
          <Typography
            sx={{
              position: "absolute",
              right: 0,
              marginRight: 2,
              bottom: 0,
              mb: 2,
            }}
            component="div"
            variant="body2"
          >
            {moment(
              album.recommendedMedia.recommendedDate,
              "DD-MM-YYYY"
            ).format("DD-MMM-YYYY")}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
