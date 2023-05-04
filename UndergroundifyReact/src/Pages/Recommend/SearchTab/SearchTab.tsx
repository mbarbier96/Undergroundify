import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchTrackTab from "./TrackTab";
import SearchAlbumTab from "./AlbumTab";
import SearchArtistTab from "./ArtistTab";
import { MediaTabEnum } from "../../../Enums/MediaTabEnum";

const getTabLabel = (labelName: string) => (
  <span style={{ color: "white" }}>{labelName}</span>
);

const SearchMedia = (props: any) => {
  const [songList, setSongList] = useState([]);
  const { audioPlayingId, setAudioPlayingId } = props;
  const [searchString, setSearchString] = useState<string | null>(null);
  const { tabValue, setTabValue } = props;

  return (
    <>
      <Row>
        <Tabs
          value={tabValue}
          onChange={(evt, val: number) => setTabValue(val)}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          <Tab label={getTabLabel("Tracks")} />
          <Tab label={getTabLabel("Albums")} />
          <Tab label={getTabLabel("Artists")} />
        </Tabs>
      </Row>
      <Row>
        <FormControl fullWidth sx={{ mt: 1, mb: 1, mr: 5 }}>
          <OutlinedInput
            sx={{ "&:focus": { outline: "none" } }}
            size="small"
            id="outlined-adornment-amount"
            onChange={(evt) => setSearchString(evt.target.value || null)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Row>
      {tabValue === MediaTabEnum.Tracks && (
        <SearchTrackTab
          audioPlayingId={audioPlayingId}
          setAudioPlayingId={setAudioPlayingId}
          searchString={searchString}
        />
      )}
      {tabValue === MediaTabEnum.Albums && (
        <SearchAlbumTab searchString={searchString} />
      )}
      {tabValue === MediaTabEnum.Artists && (
        <SearchArtistTab searchString={searchString} />
      )}
    </>
  );
};

export default SearchMedia;
