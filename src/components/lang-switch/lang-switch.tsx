import React from 'react';
import { Box, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import './lang-switch.scss';

const onLangChange = (i18n: i18n) => {
  if (i18n.resolvedLanguage === 'cz') {
    i18n.changeLanguage('en');
  } else {
    i18n.changeLanguage('cz');
  }
};

const LangSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <Box className='lang-switch'>
      <span className='fi fi-gb'></span>
      <Switch
        checked={i18n.resolvedLanguage === 'cz'}
        onChange={() => onLangChange(i18n)}
      />
      <span className='fi fi-cz'></span>
    </Box>
  );
};

export default LangSwitch;
