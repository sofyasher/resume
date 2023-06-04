import React from 'react';
import { Avatar, Box, Link, Typography } from '@mui/material';
import { EMAIL, location, NAME, PROFILE_PICTURE_URL } from '../../data/data';
import Links from '../links/links';
import './header.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  return (
    <Box className='header'>
      <Avatar
        alt='Sofya Sherstneva'
        src={PROFILE_PICTURE_URL}
        className='header-avatar'
        sx={{ width: 200, height: 200 }}
      ></Avatar>
      <Box className='header-heading-wrapper'>
        <Typography
          className='header-heading'
          variant='h2'
          component='h2'
          sx={{ color: '#ffffff' }}
        >
          {NAME}
        </Typography>
        <Typography sx={{ marginTop: 1 }}>
          <>
            {location(i18n.resolvedLanguage)} |{' '}
            <Link className='link' href={'mailto:' + EMAIL}>
              {EMAIL}
            </Link>
          </>
        </Typography>
        <Links></Links>
      </Box>
    </Box>
  );
};

export default Header;
