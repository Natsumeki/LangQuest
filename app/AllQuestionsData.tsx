import { QuizQuestion } from '~/types';

const question: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    question: 'Kur yra "A"?',
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hiragana_letter_I.svg/420px-Hiragana_letter_I.svg.png',
        text: 'I',
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Japanese_Hiragana_kyokashotai_U.svg/1200px-Japanese_Hiragana_kyokashotai_U.svg.png',
        text: 'U',
      },
      {
        id: 'option4',
        image:
          'https://w7.pngwing.com/pngs/833/29/png-transparent-hiragana-katakana-japanese-u-letter-e-angle-text-logo.png',
        text: 'E',
      },
    ],
  },
  { id: 'q2', type: 'OPEN_ENDED', text: 'I am a student', answer: 'As esu studentas' },
];
