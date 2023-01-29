import React from 'react';
import {useParams} from 'react-router';
import Data from './data.json';
import {Box, Stack, Typography, List, ListItem} from '@mui/material';

export default function Disease() {
  const {id} = useParams();
  const disease = Data[id];
  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: 'lightgreen',
        paddingTop: '6rem',
        paddingBottom: '100px',
      }}
    >
      <Stack
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="80%"
      >
        <Typography variant="h2" align="center">
          {disease.name}
        </Typography>
        <Typography variant="h7" align="center">
          Scientific Name: {disease.scientific_name}
        </Typography>
        <img
          src={localStorage.getItem('userImage')}
          alt="image"
          className="w-[20rem] mt-6 rounded-xl"
        />
        <Typography variant="h5">Symptoms: </Typography>
        <Typography variant="h7">{disease.symptoms}</Typography>
        <Typography variant="h5">Cause: </Typography>
        <Typography variant="h7">{disease.cause}</Typography>
        <Typography variant="h5">How do you prevent this disease?</Typography>
        <List
          sx={{
            listStyleType: 'disc',
            pl: 2,
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}
        >
          {disease.prevention.map((prevention) => (
            <ListItem>
              <Typography variant="h7">{prevention}</Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
