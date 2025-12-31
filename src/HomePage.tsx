import React, { useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import GameSection from './components/GameSection';
import Header from './components/Header';

export default function HomePage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    if (href === '#contact' && contactRef.current)
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#about' && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#games' && gamesRef.current)
      gamesRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#home')
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        bgcolor: '#ffffff',
      }}
    >
      {/* Header */}
      <Header onNavigate={handleScroll} />

      {/* Hero Section */}
      <Box
  id="home"
  sx={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    pt: { xs: 8, sm: 10, md: 12 },
    pb: { xs: 4, sm: 6 },
    overflow: 'hidden',
    bgcolor: '#000', // Add black background so no white shows
  }}
>
  <Box
    component="img"
    src="/images/black-tigers-hero.jpg"
    alt="Black Tigers Background"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: { xs: 'contain', md: 'cover' }, // contain on mobile, cover on desktop
      objectPosition: 'center',
      zIndex: 0,
    }}
  />
  <Container maxWidth="lg" sx={{ zIndex: 2, px: { xs: 2, sm: 3 } }}>
    <Box sx={{ textAlign: 'center', position: 'relative' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: '#EFBF04',
          mb: 2,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
        }}
      >
        {/* Optional Hero Title */}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          mb: 4,
          maxWidth: 650,
          mx: 'auto',
          lineHeight: 1.6,
          fontWeight: 900,
          mt: { xs: 2, sm: 4, md: 8 },
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          px: { xs: 2, sm: 0 },
          textShadow:
            '0 2px 4px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.8)',
        }}
      >
        {/* Optional Hero Subtitle */}
      </Typography>
      <Button
        variant="contained"
        onClick={(e) => handleScroll(e, '#about')}
        sx={{
          bgcolor: '#EFBF04',
          color: '#000',
          fontWeight: 600,
          px: { xs: 3, sm: 4 },
          py: { xs: 1.2, sm: 1.5 },
          fontSize: { xs: '0.9rem', sm: '1rem' },
          '&:hover': { bgcolor: '#d4a803' },
        }}
      >
        Learn More
      </Button>
    </Box>
  </Container>
</Box>

      {/* About Section */}
      <AboutUs ref={aboutRef} id="about" />

      {/* Games Section */}
      <Box ref={gamesRef} id="games">
        <GameSection />
      </Box>

      {/* Contact Section */}
      <Box ref={contactRef} id="contact" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#EFBF04',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Get In Touch
          </Typography>
          <ContactForm />
        </Container>
      </Box>      

      {/* Footer */}
      <Box
        sx={{
          py: 3,
          backgroundColor: '#101010',
          color: 'white',
          textAlign: 'center',
          borderTop: '3px solid #EFBF04',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Black Tigers. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
