import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      bgcolor="#333333"
      py="10px"
      color="white"
      sx={{
        width: '100%',
        textAlign: 'center',
        marginTop: 'auto', // Push footer to the bottom when content is short
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={2}
        sx={{ flexWrap: 'wrap' }}
      >
        <Box>
          <Typography variant="h6" mb="8px" sx={{ fontSize: '14px', color: 'white' }}>
            Made By:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Tyler-Joshua Dryden
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Thaddeus Flynn
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Kaelyn Glotfelty
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Mark Nelson
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Rosaly Uriarte-Salazar
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" mb="8px" sx={{ fontSize: '14px', color: 'white' }}>
            CMSC 495 7384 <br />
            Capstone In Computer Science (2252)
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            Professor Mark Munoz
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" mb="8px" sx={{ fontSize: '14px', color: 'white' }}>
            Thank you!
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
            filler text here - may remove
          </Typography>
        </Box>
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: '12px', color: 'white' }}
        mt="10px"
        textAlign="center"
      >
        ❤️
      </Typography>
    </Box>
  );
};

export default Footer;