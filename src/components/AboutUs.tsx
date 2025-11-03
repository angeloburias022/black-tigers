import React, { forwardRef } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

interface AboutUsProps {
  id?: string;
}

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(({ id }, ref) => {
  const images = [
    '/images/blacktigers-autumn-2025.jpg',
    '/images/blacktigers-autumn-2025.jpg',
    '/images/blacktigers-autumn-2025.jpg',
    '/images/blacktigers-autumn-2025.jpg',
    '/images/blacktigers-autumn-2025.jpg',
    '/images/blacktigers-autumn-2025.jpg',
  ];

  return (
    <Box
      ref={ref}
      id={id || 'about'}
      sx={{
        py: 10,
        bgcolor: '#141414', // Softer dark for better contrast
        color: '#EAEAEA',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            borderRadius: 4,
            bgcolor: '#1E1E1E',
            textAlign: 'center',
          }}
        >
          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#EFBF04',
              mb: 3,
              letterSpacing: 1,
            }}
          >
            About Us
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              color: '#CCCCCC',
              lineHeight: 1.6,
            }}
          >
            At <strong style={{ color: '#EFBF04' }}>Black Tigers</strong>, we unite innovation,
            creativity, and discipline to build a future driven by technology and teamwork.
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              maxWidth: 900,
              mx: 'auto',
              lineHeight: 1.8,
              color: '#BBBBBB',
            }}
          >
            Founded by passionate developers and thinkers, <strong>Black Tigers</strong> began as a
            small collaboration focused on software innovation. Today, we continue to challenge
            ourselves—developing scalable systems, powerful apps, and elegant solutions that make
            technology more human.
          </Typography>

          {/* Team Image Grid */}
          <Grid container spacing={3}>
            {images.map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      bgcolor: '#222222',
                      border: '1px solid rgba(239,191,4,0.2)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={src}
                      alt={`Black Tigers ${index + 1}`}
                      sx={{
                        height: 240,
                        objectFit: 'cover',
                        filter: 'brightness(0.9)',
                        transition: 'filter 0.3s ease',
                        '&:hover': { filter: 'brightness(1.1)' },
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#EFBF04',
                          fontWeight: 600,
                        }}
                      >
                        Black Tigers in Action
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Quote */}
          {/* <Typography
            variant="subtitle2"
            sx={{
              mt: 6,
              color: '#A5A5A5',
              fontStyle: 'italic',
            }}
          >
            “Strength in unity, innovation in motion.”
          </Typography> */}
        </Paper>
      </Container>
    </Box>
  );
});

export default AboutUs;
