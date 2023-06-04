export const isCurrentLanguageEnglish = (lang: string | undefined) => {
  return lang === 'en';
};

const PDF_URL = './pdf/Sofya_Sherstneva_CV.pdf';

export const openPdf = () => {
  window.open(PDF_URL, '_blank', 'fullscreen=yes');
};
