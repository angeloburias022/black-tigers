import { Container, Typography, Grid } from "@mui/material";
import type { GridProps } from "@mui/material";
import { gameVideos } from "../data/Videos";
import YouTubeVideo from "./YoutubeVideo";

export default function GameSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" sx={{ color: "#EFBF04", mb: 4 }}>
        Game Highlights 🎮
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {gameVideos.map((video) => (
          <Grid 
            {...{
              item: true,
              xs: 12,
              sm: 6,
              md: 4,
              key: video.id,
            } as GridProps}
          >
            <YouTubeVideo videoId={video.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}