import React from 'react';
import { languages } from '../../data/data';
import './languages.scss';
import { useTranslation } from 'react-i18next';

// @ts-ignore
const BoxContent = ({ t }) => (
  <>
    {' '}
    {t('languages.label')}:
    {languages.map((lang) => (
      <span className='language' key={lang.langCode}>
        <span className={'flag-icon fi fi-' + lang.flagCode}></span>
        {t('languages.' + lang.levelCode.toLowerCase())} ({lang.levelCode})
      </span>
    ))}
  </>
);

const Languages = () => {
  const { t } = useTranslation();
  return <BoxContent t={t} />;
};

export default Languages;
