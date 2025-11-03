import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Teams', href: '#teams' },
  { label: 'Games', href: '#games' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onNavigate: (event: React.MouseEvent, href: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (event: React.MouseEvent, href: string) => {
    // Close drawer first
    setMobileMenuOpen(false);

    // Delay scroll slightly to allow drawer to animate close
    setTimeout(() => {
      onNavigate(event, href);
    }, 200);
  };

  return (
    <>
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: '#101010ff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/picsvg_download.svg"
              alt="Black Tigers Logo"
              style={{ height: 'auto', maxHeight: '45px', marginRight: 8 }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                onClick={(e) => handleNavClick(e, link.href)}
                sx={{
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  px: 2,
                  '&:hover': {
                    color: '#EFBF04',
                    bgcolor: 'rgba(239, 191, 4, 0.1)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', '&:hover': { color: '#EFBF04' } }}
            onClick={() => setMobileMenuOpen((prev) => !prev)} // toggle open/close
            aria-label="toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
    
    <Drawer
  anchor="right"
  open={mobileMenuOpen}
  onClose={() => setMobileMenuOpen(false)}
  sx={{
    '& .MuiDrawer-paper': {
      width: '100vw',        // Full width
      height: '100vh',       // Full height
      bgcolor: '#1a1a1a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',  // Center vertically
      alignItems: 'center',      // Center horizontally
    },
  }}
>
  {/* Close button */}
  <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
    <IconButton
      onClick={() => setMobileMenuOpen(false)}
      sx={{ color: 'white' }}
      aria-label="close menu"
    >
      <X size={28} />
    </IconButton>
  </Box>

  {/* Navigation Links */}
<List sx={{ textAlign: 'center' }}>
  {navLinks.map((link) => (
    <ListItem key={link.label} disablePadding sx={{ mb: 3 }}>
      <ListItemButton
        onClick={(e) => handleNavClick(e, link.href)}
        sx={{
          justifyContent: 'center',
          py: 2,
          borderRadius: 2,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            bgcolor: '#EFBF04',             // Full yellow background
            '& .MuiListItemText-primary': {
              color: '#000',                 // Black text on yellow
            },
          },
        }}
      >
        <ListItemText
          primary={link.label}
          primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 700 }}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>

</Drawer>

    </>
  );
}
