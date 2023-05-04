import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchMedia from "./SearchTab/SearchTab";
import RecommendedMedia from "./RecommendedTab/RecommendedTab";
import { MediaTabEnum } from "../../Enums/MediaTabEnum";

const RecommendPage = () => {
  const [audioPlayingId, setAudioPlayingId] = useState(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [tabValue, setTabValue] = useState<number>(MediaTabEnum.Tracks);

  //Audio pause and play functionality
  useEffect(() => {
    audio?.pause();
    if (audioPlayingId) {
      const tmpAudio = new Audio(audioPlayingId);
      tmpAudio.play();
      setAudio(tmpAudio);
    } else {
      setAudio(null);
    }
  }, [audioPlayingId]);
  //Audio pause and play end

  return (
    <Container>
      <Row>
        <Col>
          <SearchMedia
            tabValue={tabValue}
            setTabValue={setTabValue}
            setAudioPlayingId={setAudioPlayingId}
            audioPlayingId={audioPlayingId}
          ></SearchMedia>
        </Col>
        <Col>
          <RecommendedMedia
            tabValue={tabValue}
            setTabValue={setTabValue}
            setAudioPlayingId={setAudioPlayingId}
            audioPlayingId={audioPlayingId}
          ></RecommendedMedia>
        </Col>
      </Row>
    </Container>
  );
};

export default RecommendPage;
