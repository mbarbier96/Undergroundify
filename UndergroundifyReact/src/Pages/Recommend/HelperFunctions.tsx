export const handlePlayPause = (
  url: string | null,
  audioPlayingId: string | null,
  setAudioPlayingId: any,
  trackUrl: string | null
) => {
  if (audioPlayingId === url) {
    setAudioPlayingId(null);
    return;
  }
  if (url) {
    setAudioPlayingId(trackUrl);
    return;
  }
};

export const getTabLabel = (labelName: string) => (
  <span style={{ color: "white" }}>{labelName}</span>
);
