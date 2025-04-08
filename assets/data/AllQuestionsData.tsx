import { QuizQuestion } from '~/types';

const questions: QuizQuestion[] = [
  {
    
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    text: "a'?",
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
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'あああ',
    answer: 'aaa',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE', 
    text: "i'?",
    options: [
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hiragana_letter_I.svg/420px-Hiragana_letter_I.svg.png',
        text: 'I',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
      },
      {
        id: 'option4',
        image:
          'https://w7.pngwing.com/pngs/833/29/png-transparent-hiragana-katakana-japanese-u-letter-e-angle-text-logo.png',
        text: 'E',
      },
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'U',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'いいい',
    answer: 'iii',
  },
  {
    id: 'q3',
    type: 'MULTIPLE_CHOICE', 
    text: "u'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://w7.pngwing.com/pngs/833/29/png-transparent-hiragana-katakana-japanese-u-letter-e-angle-text-logo.png',
        text: 'E',
      },
    ],
  },
  {
    id: 'q4',
    type: 'MULTIPLE_CHOICE',
    text: "e'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
        correct: true,
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "o'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://upload.wikimedia.org/wikipedia/commons/3/3b/Japanese_Hiragana_kyokashotai_O.png',
        text: 'O',
        correct: true,
      },
    ],
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'ううう',
    answer: 'uuu',
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "o'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://upload.wikimedia.org/wikipedia/commons/3/3b/Japanese_Hiragana_kyokashotai_O.png',
        text: 'O',
        correct: true,
      },
    ],
  }, {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ka'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Katakana_KA.png',
        text: 'ka',
        correct: true,
      },
    ],
  }, {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ki'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://e7.pngegg.com/pngimages/153/232/png-clipart-ki-hiragana-katakana-japanese-japan-angle-line.png',
        text: 'ki',
        correct: true,
      },
    ],
  }, {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ku'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://upload.wikimedia.org/wikipedia/commons/f/fe/Japanese_Hiragana_kyokashotai_KU.png',
        text: 'ku',
        correct: true,
      },
    ],
  }, {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ke'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://e7.pngegg.com/pngimages/45/488/png-clipart-hiragana-ke-katakana-japanese-japanese-angle-symbol-thumbnail.png',
        text: 'ke',
        correct: true,
      },
    ],
  }, {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ko'?",
    options: [
      {
        id: 'option1',
        image:
          'https://w7.pngwing.com/pngs/13/426/png-transparent-hiragana-japanese-writing-system-katakana-japanese-writing-system-cross-a.png',
        text: 'A',
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
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Japanese_Hiragana_kyokashotai_KO.png',
        text: 'ko',
        correct: true,
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "sa'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        text: 'SA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/689/882/png-transparent-shi-hiragana-katakana-japanese-japanese-black-to-symbol.png',
        text: 'SHI',
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikibooks/pt/2/2b/Japanese_Hiragana_big_su.png',
        text: 'SU',
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg',
        text: 'So',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "si'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        text: 'SA',
       
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/689/882/png-transparent-shi-hiragana-katakana-japanese-japanese-black-to-symbol.png',
        text: 'SHI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikibooks/pt/2/2b/Japanese_Hiragana_big_su.png',
        text: 'SU',
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg',
        text: 'So',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "su'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        text: 'SA',
       
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/689/882/png-transparent-shi-hiragana-katakana-japanese-japanese-black-to-symbol.png',
        text: 'SHI',
       
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikibooks/pt/2/2b/Japanese_Hiragana_big_su.png',
        text: 'SU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg',
        text: 'So',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "se'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        text: 'SA',
       
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/689/882/png-transparent-shi-hiragana-katakana-japanese-japanese-black-to-symbol.png',
        text: 'SHI',
       
      },
      {
        id: 'option3',
        image:
          'https://e7.pngegg.com/pngimages/243/601/png-clipart-hiragana-japanese-katakana-wikipedia-writing-style-angle-travel-world.png',
        text: 'SE',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg',
        text: 'So',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "so'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        text: 'SA',
       
      },
      {
        id: 'option2',
        image:
          'https://w7.pngwing.com/pngs/689/882/png-transparent-shi-hiragana-katakana-japanese-japanese-black-to-symbol.png',
        text: 'SHI',
       
      },
      {
        id: 'option3',
        image:
          'https://e7.pngegg.com/pngimages/243/601/png-clipart-hiragana-japanese-katakana-wikipedia-writing-style-angle-travel-world.png',
        text: 'SE',
       
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg',
        text: 'So',
        correct: true,
       
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ta'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/1024px-Japanese_Hiragana_kyokashotai_TA.svg.png',
        text: 'TA',
        correct: true,
       
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hiragana_letter_Ti.svg/1200px-Hiragana_letter_Ti.svg.png',
        text: 'CHI',
       
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Japanese_Hiragana_kyokashotai_small_TSU.png',
        text: 'TSU',
       
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg',
        text: 'TO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "chi'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/1024px-Japanese_Hiragana_kyokashotai_TA.svg.png',
        text: 'TA',
       
       
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hiragana_letter_Ti.svg/1200px-Hiragana_letter_Ti.svg.png',
        text: 'CHI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Japanese_Hiragana_kyokashotai_small_TSU.png',
        text: 'TSU',
       
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg',
        text: 'TO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "tsu'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/1024px-Japanese_Hiragana_kyokashotai_TA.svg.png',
        text: 'TA',
       
       
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hiragana_letter_Ti.svg/1200px-Hiragana_letter_Ti.svg.png',
        text: 'CHI',
       
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Japanese_Hiragana_kyokashotai_small_TSU.png',
        text: 'TSU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg',
        text: 'TO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "te'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/1024px-Japanese_Hiragana_kyokashotai_TA.svg.png',
        text: 'TA',
       
       
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hiragana_letter_Ti.svg/1200px-Hiragana_letter_Ti.svg.png',
        text: 'CHI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/gc_F7sa3s8s/maxresdefault.jpg',
        text: 'TE',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg',
        text: 'TO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "to'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/1024px-Japanese_Hiragana_kyokashotai_TA.svg.png',
        text: 'TA',
       
       
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hiragana_letter_Ti.svg/1200px-Hiragana_letter_Ti.svg.png',
        text: 'CHI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/gc_F7sa3s8s/maxresdefault.jpg',
        text: 'TE',
       
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg',
        text: 'TO',
        correct: true,
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "na'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/V61JGDX4gtg/maxresdefault.jpg',
        text: 'NA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png',
        text: 'NI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/nvEVD192ohY/maxresdefault.jpg',
        text: 'NU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/IDxOM1juCfI/maxresdefault.jpg',
        text: 'NE',
        correct: true,
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ni'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/V61JGDX4gtg/maxresdefault.jpg',
        text: 'NA',
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png',
        text: 'NI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/nvEVD192ohY/maxresdefault.jpg',
        text: 'NU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/IDxOM1juCfI/maxresdefault.jpg',
        text: 'NE',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "nu'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/V61JGDX4gtg/maxresdefault.jpg',
        text: 'NA',
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png',
        text: 'NI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/nvEVD192ohY/maxresdefault.jpg',
        text: 'NU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/IDxOM1juCfI/maxresdefault.jpg',
        text: 'NE',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ne'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/V61JGDX4gtg/maxresdefault.jpg',
        text: 'NA',
       
      },
      {
        id: 'option2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png',
        text: 'NI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/nvEVD192ohY/maxresdefault.jpg',
        text: 'NU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/IDxOM1juCfI/maxresdefault.jpg',
        text: 'NE',
        correct: true,
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ha'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
        text: 'HA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/gu8RTyE-v-U/maxresdefault.jpg',
        text: 'HI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/mnI0xxy1bKY/maxresdefault.jpg',
        text: 'FU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/YDH99EdDkxc/maxresdefault.jpg',
        text: 'HO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "hi'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
        text: 'HA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/gu8RTyE-v-U/maxresdefault.jpg',
        text: 'HI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/mnI0xxy1bKY/maxresdefault.jpg',
        text: 'FU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/YDH99EdDkxc/maxresdefault.jpg',
        text: 'HO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "fu'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
        text: 'HA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/gu8RTyE-v-U/maxresdefault.jpg',
        text: 'HI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/mnI0xxy1bKY/maxresdefault.jpg',
        text: 'FU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/YDH99EdDkxc/maxresdefault.jpg',
        text: 'HO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "he'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
        text: 'HA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/gu8RTyE-v-U/maxresdefault.jpg',
        text: 'HI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/w1FqdBrX0sc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGgSICoymF6cFYT5BBveCpeYzxSA',
        text: 'HE',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/YDH99EdDkxc/maxresdefault.jpg',
        text: 'HO',
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ho'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
        text: 'HA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/gu8RTyE-v-U/maxresdefault.jpg',
        text: 'HI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/w1FqdBrX0sc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGgSICoymF6cFYT5BBveCpeYzxSA',
        text: 'HE',

      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/YDH99EdDkxc/maxresdefault.jpg',
        text: 'HO',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ma'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/ZA22UqBknfU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKOjufXsOdx3MZHN79kox3vTlG6A',
        text: 'MA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/hSDjoImVs4E/maxresdefault.jpg',
        text: 'MI',
     
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/TM-2RVFKGq0/maxresdefault.jpg',
        text: 'MU',

      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/8cf-HUc5v0o/maxresdefault.jpg',
        text: 'ME',
       
       
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "mi'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/ZA22UqBknfU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKOjufXsOdx3MZHN79kox3vTlG6A',
        text: 'MA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/hSDjoImVs4E/maxresdefault.jpg',
        text: 'MI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/TM-2RVFKGq0/maxresdefault.jpg',
        text: 'MU',

      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/8cf-HUc5v0o/maxresdefault.jpg',
        text: 'ME',
       
       
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "mu'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/ZA22UqBknfU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKOjufXsOdx3MZHN79kox3vTlG6A',
        text: 'MA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/hSDjoImVs4E/maxresdefault.jpg',
        text: 'MI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/TM-2RVFKGq0/maxresdefault.jpg',
        text: 'MU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/8cf-HUc5v0o/maxresdefault.jpg',
        text: 'ME',
       
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "me'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/ZA22UqBknfU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKOjufXsOdx3MZHN79kox3vTlG6A',
        text: 'MA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/hSDjoImVs4E/maxresdefault.jpg',
        text: 'MI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/TM-2RVFKGq0/maxresdefault.jpg',
        text: 'MU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/8cf-HUc5v0o/maxresdefault.jpg',
        text: 'ME',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "mo'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/ZA22UqBknfU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKOjufXsOdx3MZHN79kox3vTlG6A',
        text: 'MA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/hSDjoImVs4E/maxresdefault.jpg',
        text: 'MI',
       
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/TM-2RVFKGq0/maxresdefault.jpg',
        text: 'MU',
       
      },
      {
        id: 'option4',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/1a/Japanese_Hiragana_kyokashotai_MO.svg',
        text: 'MO',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ra'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png',
        text: 'RA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/IK1MD-VvPj0/maxresdefault.jpg',
        text: 'RI',
       
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png',
        text: 'RU',
       
      },
      {
        id: 'option4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-gnUUIsY8wff1BWdPg1pAYtA1ifNgs93mQ&s',
        text: 'RE',
     
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ri'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png',
        text: 'RA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/IK1MD-VvPj0/maxresdefault.jpg',
        text: 'RI',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png',
        text: 'RU',
       
      },
      {
        id: 'option4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-gnUUIsY8wff1BWdPg1pAYtA1ifNgs93mQ&s',
        text: 'RE',
     
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ru'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png',
        text: 'RA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/IK1MD-VvPj0/maxresdefault.jpg',
        text: 'RI',
 
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png',
        text: 'RU',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-gnUUIsY8wff1BWdPg1pAYtA1ifNgs93mQ&s',
        text: 'RE',
     
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "re'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png',
        text: 'RA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/IK1MD-VvPj0/maxresdefault.jpg',
        text: 'RI',
 
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png',
        text: 'RU',
       
      },
      {
        id: 'option4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-gnUUIsY8wff1BWdPg1pAYtA1ifNgs93mQ&s',
        text: 'RE',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ro'?",
    options: [
      {
        id: 'option1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png',
        text: 'RA',
       
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/IK1MD-VvPj0/maxresdefault.jpg',
        text: 'RI',
 
      },
      {
        id: 'option3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png',
        text: 'RU',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/6z0MUQpb9f4/maxresdefault.jpg',
        text: 'RO',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "ya'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/7AdND8aaxZE/maxresdefault.jpg',
        text: 'YA',
        correct: true,
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/kiZYr6VgK4Y/maxresdefault.jpg',
        text: 'YU',
 
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/RzA1Cc1urxw/maxresdefault.jpg',
        text: 'YO',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/yp-LwaQ0Vko/maxresdefault.jpg',
        text: 'WA',
       
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "yu'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/7AdND8aaxZE/maxresdefault.jpg',
        text: 'YA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/kiZYr6VgK4Y/maxresdefault.jpg',
        text: 'YU',
        correct: true,
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/RzA1Cc1urxw/maxresdefault.jpg',
        text: 'YO',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/yp-LwaQ0Vko/maxresdefault.jpg',
        text: 'WA',
       
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "yo'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/7AdND8aaxZE/maxresdefault.jpg',
        text: 'YA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/kiZYr6VgK4Y/maxresdefault.jpg',
        text: 'YU',
   
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/RzA1Cc1urxw/maxresdefault.jpg',
        text: 'YO',
        correct: true,
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/yp-LwaQ0Vko/maxresdefault.jpg',
        text: 'WA',
       
       
      },
    ],
  },
  {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "wa'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/7AdND8aaxZE/maxresdefault.jpg',
        text: 'YA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/kiZYr6VgK4Y/maxresdefault.jpg',
        text: 'YU',
   
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/RzA1Cc1urxw/maxresdefault.jpg',
        text: 'YO',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/yp-LwaQ0Vko/maxresdefault.jpg',
        text: 'WA',
        correct: true,
       
      },
    ],
  },{
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "N'?",
    options: [
      {
        id: 'option1',
        image:
          'https://i.ytimg.com/vi/7AdND8aaxZE/maxresdefault.jpg',
        text: 'YA',
     
      },
      {
        id: 'option2',
        image:
          'https://i.ytimg.com/vi/kiZYr6VgK4Y/maxresdefault.jpg',
        text: 'YU',
   
      },
      {
        id: 'option3',
        image:
          'https://i.ytimg.com/vi/RzA1Cc1urxw/maxresdefault.jpg',
        text: 'YO',
       
      },
      {
        id: 'option4',
        image:
          'https://i.ytimg.com/vi/mK7WH1UJrQM/maxresdefault.jpg',
        text: 'N',
        correct: true,
       
      },
    ],
  },
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'えええ',
    answer: 'eee',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'おおお',
    answer: 'ooo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'かかか',
    answer: 'kakaka',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'くくく',
    answer: 'kukuku',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'こここ',
    answer: 'kokoko',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ききき',
    answer: 'kikiki',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'けけけ',
    answer: 'kekeke',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'こここ',
    answer: 'kokoko',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'わわわ',
    answer: 'wawawa',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'んんん',
    answer: 'NNN',
  },


  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'さささ',
    answer: 'sasasa',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ししし',
    answer: 'shishishi',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'すすす',
    answer: 'sususu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'せせせ',
    answer: 'sesese',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'そそそ',
    answer: 'sososo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'たたた',
    answer: 'tatata',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ちちち',
    answer: 'chichichi',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'つつつ',
    answer: 'tsutsutsu',
  },



  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ててて',
    answer: 'tetete',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ととと',
    answer: 'tototo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ななな',
    answer: 'nanana',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ににに',
    answer: 'ninini',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ぬぬぬ',
    answer: 'nununu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ねねね',
    answer: 'nenene',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ののの',
    answer: 'nonono',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ははは',
    answer: 'hahaha',
  },


  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ひひひ',
    answer: 'hihihi',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ふふふ',
    answer: 'fufufu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'へへへ',
    answer: 'hehehe',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ほほほ',
    answer: 'hohoho',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ままま',
    answer: 'mamama',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'みみみ',
    answer: 'mimimi',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'むむむ',
    answer: 'mumumu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'めめめ',
    answer: 'mememe',
  },
///////////
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ももも',
    answer: 'momomo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ややや',
    answer: 'yayaya',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ゆゆゆ',
    answer: 'yuyuyu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'よよよ',
    answer: 'yoyoyo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ららら',
    answer: 'rarara',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'りりり',
    answer: 'ririri',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'るるる',
    answer: 'rururu',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'れれれ',
    answer: 'rerere',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ろろろ',
    answer: 'rororo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'わわわ',
    answer: 'wawawa',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'ををを',
    answer: 'wowowo',
  },{
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'んんん',
    answer: 'nnn',
  },
];

export default questions;
