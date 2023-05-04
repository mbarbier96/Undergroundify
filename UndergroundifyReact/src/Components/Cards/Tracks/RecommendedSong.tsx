import * as React from "react";
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
import { useDeleteRecommendedMedia } from "../../../Queries/RecommendedMedia/useDeleteRecommended";

export default function MediaControlCard(props: any) {
  const theme = useTheme();
  const { track } = props;
  const { audioPlayingId, setAudioPlayingId } = props;

  const deleteRecommendedMedia = useDeleteRecommendedMedia();

  const handleUnrecommendMedia = (id: number) => {
    deleteRecommendedMedia.mutate(id);
  };

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        marginBottom: 3,
        ml: 2,
        width: 500,
      }}
      variant="outlined"
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="albumImage"
          height="120"
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body2" color="text.primary">
            {track?.trackName}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            By {track?.artists.map((a: any) => a.artistName).join(", ")}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            sx={{
              color: "white",
              "&:hover": { color: "#ff4c4c", borderColor: "#ff4c4c" },
              "&:focus": { outline: "none" },
              borderColor: "white",
              mr: 3,
              fontSize: 12,
            }}
            size="small"
            variant="outlined"
            onClick={() => handleUnrecommendMedia(track.recommendedMedia.id)}
          >
            Unrecommend
          </Button>
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
              track.recommendedMedia.recommendedDate,
              "DD-MM-YYYY"
            ).format("DD-MMM-YYYY")}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
