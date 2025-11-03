import { Box } from '@mui/material';

export default function BlackTigerBlinkingLoader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
        m: 0,
        p: 0,
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          minWidth: { xs: '100%', sm: '70%', md: '60%' },
          minHeight: { xs: '100%', sm: '70%', md: '60%' },
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
        }}
      >
        <source src="/videos/blkt-3.mp4" type="video/mp4" />
      </Box>
    </Box>
  );
}