import { WorkExperienceModel } from '../models/work-experience.model';
import { EducationModel } from '../models/education.model';

export const workExperiencesEn: WorkExperienceModel[] = [
  {
    position: 'Consultant',
    companyName: 'Profinit EU, s.r.o.',
    location: 'Prague, Czech Republic',
    from: 'May 2020',
    description:
      'Most of the time I develop (including analysis, implementation, automatic tests) ' +
      'a frontend part of a web application (Angular, Jest, Cypress), but sometimes I am attending ' +
      'backend development too (Spring, PostgreSQL).',
  },
  {
    position: 'Frontend developer (volunteer)',
    companyName: 'MFF UK for Czech Red Cross',
    location: 'Prague, Czech Republic',
    from: 'April 2020',
    to: 'April 2020',
    link: 'https://www.ukforum.cz/rubriky/aktuality/341-tym-matfyzu-vyvinul-aplikaci-na-pomoc-osamelym-seniorum',
    description:
      'Development of the application for helping to lonely old people (React, Bootstrap).',
  },
  {
    position: 'OutSystems Junior Developer',
    companyName: 'AspectWorks s.r.o.',
    location: 'Prague, Czech Republic',
    from: 'July 2019',
    to: 'March 2020',
    description: 'Web and Mobile Development.',
  },
];

export const educationEn: EducationModel[] = [
  {
    faculty: 'Faculty of Mathematics and Physics',
    university: 'Charles University',
    major: 'Software and data engineering.',
    from: 'October 2016',
    to: 'February 2023',
    location: 'Prague, Czech Republic',
  },
];

export const LOCATION_EN = 'Prague, Czech Republic';
