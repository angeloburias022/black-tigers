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
    emailjs
      .send('service_m48x1yr', 'template_8o5v43m', templateParams, 'd5g9G1cD9s0v5gLmm')
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          setLoading(false);
          setForm({ fullName: '', email: '', message: '', phoneNumber: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('❌ Failed to send message. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <Paper
      elevation={8}
      sx={{
        p: { xs: 4, sm: 6 },
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        backgroundColor: '#1E1E1E',
        color: '#EAEAEA',
        borderRadius: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
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
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.6)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#EFBF04' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: '#CCCCCC', '&.Mui-focused': { color: '#EFBF04' } },
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
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.6)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#EFBF04' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: '#CCCCCC', '&.Mui-focused': { color: '#EFBF04' } },
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
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.6)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#EFBF04' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: '#CCCCCC', '&.Mui-focused': { color: '#EFBF04' } },
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
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(239,191,4,0.6)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#EFBF04' },
              },
            },
            inputLabel: {
              shrink: true,
              sx: { color: '#CCCCCC', '&.Mui-focused': { color: '#EFBF04' } },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: '#EFBF04',
            color: '#000',
            fontWeight: 600,
            '&:hover': { backgroundColor: '#d4a803' },
            '&:disabled': { backgroundColor: '#666', color: '#999' },
          }}
        >
          {loading ? 'Sending...' : 'Submit'}
        </Button>

        {status && (
          <Typography textAlign="center" sx={{ mt: 1, color: '#EFBF04', fontWeight: 500 }}>
            {status}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}