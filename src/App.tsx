import { useState, useEffect } from 'react';
import { Fade } from '@mui/material';
import BlackTigerBlinkingLoader from './components/BlackTigerLoader';
import HomePage from './HomePage';
import CssBaseline from '@mui/material/CssBaseline';
import BlackTigerLandingPage from './components/BlackTigerLandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust timing to match your video duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CssBaseline />
      
      <Fade in={loading} timeout={500} unmountOnExit>
        <div>
          <BlackTigerLandingPage />
        </div>
      </Fade>

      <Fade in={!loading} timeout={500}>
        <div>
          <HomePage />
        </div>
      </Fade>
    </>
  );
}

export default App;