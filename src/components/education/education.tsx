import React from 'react';
import { education } from '../../data/data';
import CustomBox from '../custom-box/custom-box';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const boxContent = (t: any, lang: string | undefined) => (
  <Box>
    {education(lang).map((education) => (
      <Box sx={{ marginTop: 2 }} key={education.faculty + education.from}>
        <b>{education.faculty}</b>, {education.university} &mdash;{' '}
        {education.location}
        <div className='experience-period'>
          {education.from} &mdash; {education.to ? education.to : t('untilNow')}
        </div>
        <div className='experience-description'>{education.major}</div>
      </Box>
    ))}
  </Box>
);
const Education = () => {
  const { t, i18n } = useTranslation();

  return (
    <CustomBox
      content={boxContent(t, i18n.resolvedLanguage)}
      title={t('education.label')}
    ></CustomBox>
  );
};

export default Education;
