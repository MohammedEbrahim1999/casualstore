'use client'
import React from 'react'
import { Box, Container, Typography, Divider, Stack } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import DoneAnimation from '../../../public/Imgs/done.json';
import Lottie from "lottie-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzbpokg");

  return (
    <Box sx={{
      marginTop: { xs: "50px", lg: "100px" },
    }}>
      <Container>
        <Typography variant='h2' sx={{
          textAlign: "center",
          mb: 2
        }}> Contact Us </Typography>
        <Divider sx={{
          backgroundColor: "gray",
          mb: 2
        }} />
        <Stack>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='Name'
              placeholder='Enter your name'
              id='name'
              style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              style={{ resize: "none", width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' }}
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100px' }}
            >
              {state.submitting? "Submitting": "Submit"}
            </button>
            <Typography variant='p'>
              {state.succeeded && (<Typography variant='p' sx={{
                display: 'flex',
                height: "45px",
                mt:4,
                alignItems: "center"
              }}> <Lottie className="done-animation" loop={false} animationData={DoneAnimation} /> Your Message Has Been Sent Successfully 👌.</Typography>)}
            </Typography>
          </form>
        </Stack>

      </Container>
    </Box>
  )
}

export default Contact
