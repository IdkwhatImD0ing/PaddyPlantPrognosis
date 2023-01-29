import React from 'react';
import {useParams} from 'react-router';
import Data from './data.json';
import {Box, Stack, Typography} from '@mui/material';

export default function Disease() {
  const {id} = useParams();
  const disease = Data[id];
  return (
    <Box
      width="100%" 
      height="100vh"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: 'lightgreen',
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="80%"
      >
        <Typography variant="h2">{disease.name}</Typography>
        <Typography variant="h7">
          Scientific Name: {disease.scientific_name}
        </Typography>
        <img
          src={localStorage.getItem('userImage')}
          alt="image"
          className="w-[20rem] mt-6 rounded-xl"
        />
        <Typography variant="h7">Symptoms: {disease.symptoms}</Typography>
        <Typography variant="h7">Cause: {disease.cause}</Typography>
        <Typography variant="h7">How do you prevent this disease?</Typography>
        {disease.prevention.map((prevention) => (
          <Typography variant="h7">{prevention}</Typography>
        ))}
      </Stack>
    </Box>
  );
}
