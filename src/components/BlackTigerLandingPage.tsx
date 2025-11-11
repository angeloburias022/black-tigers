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
        component="img"
        src="/images/BT Logo White.png"
        alt="Black Tigers"
        sx={{
          width: { xs: '60%', sm: '40%', md: '30%' },
          height: 'auto',
          objectFit: 'contain',
          animation: 'blink 1.5s infinite',
        }}
      />

      {/* 👇 simple blink animation */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </Box>
  );
}
