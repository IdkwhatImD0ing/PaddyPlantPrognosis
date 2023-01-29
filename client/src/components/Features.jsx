import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {Parallax} from 'react-parallax';
const url = '/field.webp';

const Features = () => {
  return (
    <Parallax bgImage={url} strength={400} blur={2}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          maxWidth="800px"
          direction="column"
          alignItems="center"
          spacing={5}
          justifyContent="center"
          sx={{
            paddingTop: '150px',
            paddingBottom: '150px',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          <Typography variant="h4" sx={{color: 'black'}} align="center">
            Features:
          </Typography>
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Upload a photo of your paddy plant
          </Typography>
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Our system will analyze the photo and let you know what's wrong with
            your plant
          </Typography>
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Teaches you how to spot the disease in the future
          </Typography>
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Understand what causes the disease and how to treat it
          </Typography>
        </Stack>
      </Box>
    </Parallax>
  );
};

export default Features;
