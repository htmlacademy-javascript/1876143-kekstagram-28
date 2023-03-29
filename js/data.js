import {getRandomArrayElement} from './util.js';
import {getNewNumberArray} from './util.js';
import {createIdGenerator} from './util.js';
//import {createRandomUnicPhotoNumber} from './util.js';

const DESCRIPTIONS = [
  'прекрасный пляж',
  'дорога на пляж',
  'бирюзовые воды',
  'умопомрачительная девушка',
  'рисовые человечки',
  'машина мечты',
  'клубнично лаконично',
  'бодрящий фреш',
  'самолёт',
  'обувь в надежном месте',
  'песчаная дорога к пляжу',
  'ауди тоже неплохо',
  'только овощи!!(',
  'котосуши?',
  'роботапки',
  'мы не одни в небе',
  'отличный был концерт',
  'прикупил ретро авто',
  'светло и руки свободны))',
  'пальмы',
  'не знаю что это, но очень вкусно) и лайм в кассу',
  'божественный закат',
  'здесь полно крабов',
  'шоу',
  'опасный переезд',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Авдотья',
  'Егор',
  'Сергей',
  'Даня',
  'Ольга',
  'Билл',
];


//const photoNumbers = getNewNumberArray(1,25);

//const unicPhotoNumber = createRandomUnicPhotoNumber(photoNumbers[0], photoNumbers[photoNumbers.length - 1]);
const unicPhotoNumber = createIdGenerator();

const likes = getNewNumberArray(15,200);

const commentsId = getNewNumberArray(1,50000);

const avatarNumbers = getNewNumberArray(1,6);

const SIMILAR_OBJECT_COUNT = 25;

const photosId = createIdGenerator();

function createObject(){
  const newObject = {
    id:photosId(),
    url: `photos/${unicPhotoNumber()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomArrayElement(likes),
    comments: [{id: getRandomArrayElement(commentsId)},
      {avatar: `img/avatar-${getRandomArrayElement(avatarNumbers)}.svg`},
      { message: getRandomArrayElement(MESSAGES)},
      {name: getRandomArrayElement(NAMES)},
    ]
  };

  return newObject;
}
const createObjects = () => Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);

export {createObjects};
