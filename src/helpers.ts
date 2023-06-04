export const isCurrentLanguageEnglish = (lang: string | undefined) => {
  return lang === 'en';
};

const PDF_CZ_URL = './pdf/Sofya_Sherstneva_CV_CZ.pdf';
const PDF_EN_URL = './pdf/Sofya_Sherstneva_CV_EN.pdf';

export const openPdf = (language: string) => {
  const url = language === 'cz' ? PDF_CZ_URL : PDF_EN_URL;
  window.open(url, '_blank', 'fullscreen=yes');
};
