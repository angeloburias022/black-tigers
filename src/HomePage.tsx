import React, { useRef } from 'react';
import {
  // AppBar,
  Box,
  // Toolbar,
  Typography,
  Button,
  Container,
  // Paper,
  // Card,
  // CardMedia,
  // CardContent
} from '@mui/material';

// import Grid from '@mui/material/Grid';

import ContactForm from './components/ContactForm';
// import teamsData from './data/teams.json';
// import playersData from './data/players.json';
import AboutUs from './components/AboutUs';
import GameSection from './components/GameSection';
import Header from './components/Header';



export default function HomePage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  // const teamRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  // const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  const handleScroll = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    if (href === '#contact' && contactRef.current)
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#about' && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    // else if (href === '#teams' && teamRef.current)
      // teamRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#games' && gamesRef.current)
      gamesRef.current.scrollIntoView({ behavior: 'smooth' });
    else if (href === '#home')
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const handleBack = () => setSelectedTeam(null);
  // const selectedPlayers = selectedTeam
  //   ? playersData.filter((p) => Number(p.teamId) === selectedTeam)
  //   : [];

  // const selectedTeamData = teamsData.find((t) => Number(t.id) === selectedTeam);

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
      {/* <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: '#101010ff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/picsvg_download.svg"
              alt="Black Tigers Logo"
              style={{ height: 65, marginRight: 1 }}
            />
          </Box>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              onClick={(e) => handleScroll(e, link.href)}
              sx={{
                ml: { xs: 1, sm: 2 },
                fontWeight: 500,
                '&:hover': { color: '#EFBF04' },
                transition: 'color 0.2s ease-in-out',
              }}
            >
              {link.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar> */}

      <Header onNavigate={handleScroll} />

      {/* ===============================
          Hero Section
      =============================== */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          pt: { xs: 10, sm: 12 },
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/black-tigers-hero.jpg"
          alt="Black Tigers Background"
          className="hero-background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <Container maxWidth="lg" sx={{ zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', position: 'relative' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#EFBF04',
                mb: 2,
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              {/* Black Tigersg */}
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
                marginTop: 25,
                textShadow:
                  '0 2px 4px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.8)',
              }}
            >
              {/* Building the future with passionate teamwork */}
            </Typography>
            <Button
              variant="contained"
              onClick={(e) => handleScroll(e, '#about')}
              sx={{
                bgcolor: '#EFBF04',
                color: '#000',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                '&:hover': { bgcolor: '#d4a803' },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===============================
          About Section
      =============================== */}
      <AboutUs ref={aboutRef} id="about" />

      {/* ===============================
          Teams & Players Section
      =============================== */}
      {/* <Box ref={teamRef} id="teams" sx={{ py: 10, bgcolor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="lg">
          {!selectedTeam ? (
            <>
              <Typography
                variant="h3"
                sx={{ textAlign: 'center', color: '#EFBF04', mb: 6 }}
              >
                Meet Our Teams
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {teamsData.map((team) => (
                  <Grid item xs={12} sm={6} md={4} key={team.id}>
                    <Card
                      sx={{
                        bgcolor: '#2a2a2a',
                        color: 'white',
                        borderRadius: 3,
                        cursor: 'pointer',
                        transition: '0.3s',
                        '&:hover': { transform: 'scale(1.03)', boxShadow: 8 },
                      }}
                      onClick={() => setSelectedTeam(team.id)}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={team.logo}
                        alt={team.name}
                        sx={{ objectFit: 'contain', p: 3 }}
                      />
                      <CardContent>
                        <Typography variant="h5" sx={{ color: '#EFBF04' }}>
                          {team.name}
                        </Typography>
                        <Typography variant="body2" color="gray">
                          {team.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ mb: 4, borderColor: '#EFBF04', color: '#EFBF04' }}
              >
                ← Back to Teams
              </Button>
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  color: '#EFBF04',
                  mb: 6,
                }}
              >
                {selectedTeamData?.name} Players
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {selectedPlayers.map((player) => (
                  <Grid item xs={12} sm={6} md={4} key={player.id}>
                    <Card
                      sx={{
                        bgcolor: '#2a2a2a',
                        color: 'white',
                        borderRadius: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="220"
                        image={player.image}
                        alt={player.name}
                      />
                      <CardContent>
                        <Typography variant="h6" sx={{ color: '#EFBF04' }}>
                          {player.name}
                        </Typography>
                        <Typography variant="body2">
                          Height: {player.height}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Achievements:
                        </Typography>
                        <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                          {player.achievements.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </Box> */}

      {/* ===============================
    Games Section
      =============================== */}
      <Box ref={gamesRef} id="games">
        <GameSection />
      </Box>

{/* ===============================
          Contact Section
      =============================== */}
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


      {/* ===============================
          Footer
      =============================== */}
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
