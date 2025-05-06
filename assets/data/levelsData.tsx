import { QuizQuestion } from '~/types';
import { questionLevel1 } from './level1';
import { questionLevel2 } from './level2';
import { questionLevel3 } from './level3';
import { questionLevel4 } from './level4';
import { questionLevel5 } from './level5';
import { questionLevel6 } from './level6';
import { questionLevel7 } from './level7';
import { questionLevel8 } from './level8';

// Helper funkcija: pridėti lygiui numerį prie kiekvieno klausimo ID
const withLevelId = (level: number, questions: QuizQuestion[]): QuizQuestion[] => {
  return questions.map((q, index) => ({
    ...q,
    id: `level${level}_${q.id || `q${index + 1}`}`,
  }));
};

// levelQuestions su unikaliu ID
const levelQuestions: Record<number, QuizQuestion[]> = {
  1: withLevelId(1, questionLevel1),
  2: withLevelId(2, questionLevel2),
  3: withLevelId(3, questionLevel3),
  4: withLevelId(4, questionLevel4),
  5: withLevelId(5, questionLevel5),
  6: withLevelId(6, questionLevel6),
  7: withLevelId(7, questionLevel7),
  8: withLevelId(8, questionLevel8),
};

export default levelQuestions;
