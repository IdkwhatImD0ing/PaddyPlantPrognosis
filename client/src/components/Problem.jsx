import {Stack, Typography, Box} from '@mui/material';
import React from 'react';
import {Parallax} from 'react-parallax';
import ForestIcon from '@mui/icons-material/Forest';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Problem = () => {
  return (
    <Parallax bgImage="/statement.webp" strength={400} blur={2}>
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
          spacing={3}
          justifyContent="center"
          sx={{
            paddingTop: '150px',
            paddingBottom: '150px',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          <Typography variant="h4" sx={{color: 'black'}} align="center">
            Problem Statement:
          </Typography>
          <ForestIcon />
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Rice (Oryza sativa) is a staple food for a large portion of the
            world's population, and paddy, the raw grain before removal of husk,
            is the primary form in which it is cultivated. Paddy cultivation is
            predominantly done in tropical climates, specifically in Asian
            countries, where the ideal temperature and humidity conditions
            support its growth. However, paddy cultivation requires consistent
            supervision because several diseases and pests can affect the crop,
            leading to significant yield loss. These diseases can manifest in
            various ways, such as discoloration, wilting, and stunted growth.
          </Typography>
          <SearchIcon />
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Expert supervision is typically necessary to mitigate these diseases
            and prevent crop loss. However, the availability of crop protection
            experts is limited, and manual disease diagnosis is often tedious
            and expensive. This is especially true in remote areas where access
            to experts is limited. Additionally, manual diagnosis can be
            time-consuming, which can delay treatment and lead to further crop
            loss.
          </Typography>
          <SmartToyIcon />
          <Typography variant="h6" sx={{color: 'black'}} align="center">
            Given the challenges of manual disease identification in paddy
            cultivation, our app, Paddy Plant Prognosis, has been developed to
            automate this process. By utilizing computer vision-based
            techniques, our app has the potential to significantly improve the
            accuracy and speed of disease identification in paddy crops. With
            our app, farmers can simply take a picture of their plant and upload
            it to our system, which will quickly analyze the photo and identify
            any potential diseases. By catching diseases early, farmers can save
            both time and money that would have been spent on costly treatments
            and labor.
          </Typography>
        </Stack>
      </Box>
    </Parallax>
  );
};

export default Problem;
