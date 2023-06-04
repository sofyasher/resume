import React from 'react';
import { openPdf } from '../../helpers';
import { Box, Button } from '@mui/material';
import './download-pdf.scss';
import { PictureAsPdf } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const DownloadPdf = () => {
  const { t, i18n } = useTranslation();
  const title = t('print.downloadPdf');
  return (
    <>
      <Box className='download-pdf-wrapper'>
        <Box className='download-pdf-label'>{t('print.text')}</Box>
        <Button
          onClick={() => openPdf(i18n.language)}
          variant='text'
          className='download-icon'
          title={title}
        >
          <PictureAsPdf fontSize='large' />
        </Button>
      </Box>
    </>
  );
};

export default DownloadPdf;
