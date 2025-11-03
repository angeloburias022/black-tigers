import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
    phoneNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const templateParams = {
      ...form,
      time: new Date().toLocaleString(),
    };

    setStatus('✅ Message sent successfully!');
    setLoading(false);
    // uncomment the following lines to enable email sending
    // emailjs
    //   .send('service_m48x1yr', 'template_8o5v43m', templateParams, 'd5g9G1cD9s0v5gLmm')
    //   .then(
    //     () => {
    //       setStatus('✅ Message sent successfully!');
    //       setLoading(false);
    //       setForm({ fullName: '', email: '', message: '', phoneNumber: '' });
    //     },
    //     (error) => {
    //       console.error('FAILED...', error.text);
    //       setStatus('❌ Failed to send message. Please try again later.');
    //       setLoading(false);
    //     }
    //   );
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 3, sm: 5 },
        maxWidth: 500,
        mx: 'auto',
        mt: 8,
        backgroundColor: '#1e1e1e',
        color: 'white',
        borderRadius: '1rem',
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          name="fullName"
          label="Full Name"
          placeholder="Ex: Juan Dela Cruz"
          required
          fullWidth
          value={form.fullName}
          onChange={handleChange}
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#646cff' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: 'gray', '&.Mui-focused': { color: '#646cff' } },
            },
          }}
        />

        <TextField
          name="phoneNumber"
          label="Phone Number"
          placeholder="Ex: 09123456789"
          required
          fullWidth
          value={form.phoneNumber}
          onChange={handleChange}
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#646cff' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: 'gray', '&.Mui-focused': { color: '#646cff' } },
            },
          }}
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="Ex: juan@gmail.com"
          required
          fullWidth
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#646cff' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: 'gray', '&.Mui-focused': { color: '#646cff' } },
            },
          }}
        />

        <TextField
          name="message"
          label="Message"
          placeholder="Ex: Hello, I would like to inquire about..."
          fullWidth
          multiline
          minRows={4}
          value={form.message}
          onChange={handleChange}
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#646cff' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: 'gray', '&.Mui-focused': { color: '#646cff' } },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            mt: 2,
            backgroundColor: '#646cff',
            '&:hover': { backgroundColor: '#535bf2' },
          }}
        >
          {loading ? 'Sending...' : 'Submit'}
        </Button>

        {status && (
          <Typography textAlign="center" sx={{ mt: 1, color: 'white' }}>
            {status}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
