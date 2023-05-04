import * as React from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDeleteRecommendedMedia } from "../../../Queries/RecommendedMedia/useDeleteRecommended";

export default function MediaControlCard(props: any) {
  const { album } = props;

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
        width: 500,
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
          <Typography component="div" variant="body2" color="text.primary">
            {album?.albumName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${moment(album.albumReleaseDate).format(
              "YYYY"
            )} - ${album?.artists.map((a: any) => a.artistName).join(", ")}`}
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
            onClick={() => handleUnrecommendMedia(album.recommendedMedia.id)}
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
              album.recommendedMedia.recommendedDate,
              "DD-MM-YYYY"
            ).format("DD-MMM-YYYY")}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
