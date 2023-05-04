import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getTabLabel } from "../../Recommend/HelperFunctions";
import LikedTrack from "../../../Components/Cards/Tracks/LikedSong";
import TrackTab from "./TrackTab";
import AlbumTab from "./AlbumTab";
import ArtistTab from "./ArtistTab";

const LikedTab = (props: any) => {
  const [tabValue, setTabValue] = useState<number>(MediaTabEnum.Tracks);
  const { audioPlayingId, setAudioPlayingId } = props;
  const { deleteLike } = props;

  return (
    <div>
      <Row>
        <Typography className="mt-3 ml-3" variant="h5" gutterBottom>
          Liked Media
        </Typography>
      </Row>
      <Tabs
        value={tabValue}
        onChange={(evt, val: number) => setTabValue(val)}
        TabIndicatorProps={{ style: { backgroundColor: "white" } }}
      >
        <Tab label={getTabLabel("Tracks")} />
        <Tab label={getTabLabel("Albums")} />
        <Tab label={getTabLabel("Artists")} />
      </Tabs>
      <div
        style={{
          height: "44rem",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <Row>
          {tabValue === MediaTabEnum.Tracks && (
            <TrackTab
              deleteLike={deleteLike}
              audioPlayingId={audioPlayingId}
              setAudioPlayingId={setAudioPlayingId}
            />
          )}
          {tabValue === MediaTabEnum.Albums && (
            <AlbumTab deleteLike={deleteLike} />
          )}
          {tabValue === MediaTabEnum.Artists && (
            <ArtistTab deleteLike={deleteLike} />
          )}
        </Row>
      </div>
    </div>
  );
};

export default LikedTab;
