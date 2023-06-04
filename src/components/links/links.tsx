import React from 'react';
import {
  GITHUB_ICON_URL,
  GITHUB_REPO_URL,
  LINKEDIN_ICON_URL,
  LINKEDIN_URL,
} from '../../data/data';
import { Avatar, Box, Link } from '@mui/material';

// @ts-ignore
const LinkWithLogo = ({ logoSrc, url, alt }) => (
  <Box sx={{ display: 'flex', color: '#ffffff', alignItems: 'center' }}>
    <Avatar
      sx={{ width: 30, height: 30, marginRight: 1 }}
      src={logoSrc}
      alt={alt}
    />
    <Link className='link' href={url} target='_blank' rel='noreferrer'>
      sofyasher
    </Link>
  </Box>
);

const Links = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: 1, gap: 2 }}>
      <LinkWithLogo
        logoSrc={LINKEDIN_ICON_URL}
        alt='LinkedIn logo'
        url={LINKEDIN_URL}
      ></LinkWithLogo>
      <LinkWithLogo
        logoSrc={GITHUB_ICON_URL}
        alt='GitHub logo'
        url={GITHUB_REPO_URL}
      ></LinkWithLogo>
    </Box>
  );
};

export default Links;
