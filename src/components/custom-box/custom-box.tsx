import React from 'react';
import { Box, Typography } from '@mui/material';
import './custom-box.scss';

// @ts-ignore
const CustomBox = ({ content, title }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#304442',
        color: '#ffffff',
        padding: 3,
        paddingBottom: 4,
        borderRadius: '20px',
      }}
    >
      <Typography className='section-title' variant='h6' component='h6'>
        {title}
      </Typography>
      {content}
    </Box>
  );
};

export default CustomBox;
