type SKILLS_LEVELS = 1 | 2 | 3 | 4 | 5;

export interface SkillModel {
  name: string;
  level: SKILLS_LEVELS;
  hidden?: boolean;
}
