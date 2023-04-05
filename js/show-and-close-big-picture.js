import {isEscapeKey} from './util.js';

//нахожу нужные элементы
//const container = document.querySelector('.pictures');

const bigPictureContainer = document.querySelector('.big-picture');


const closePictureButton = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)){
    bigPictureContainer.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};

const bigPictureDetails = ({url, likes, description}) => {
  bigPictureContainer.querySelector('.big-picture__img img').src = url;
  bigPictureContainer.querySelector('.big-picture__img img').alt = description;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureContainer.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureDetails(data);
};


const closeBigPicturesByEsc = () => {
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)){
      bigPictureContainer.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
};

const closeBigPicturesByButton = () => {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};
closePictureButton.addEventListener('click', closeBigPicturesByButton);


export {closeBigPicturesByEsc};
export {showBigPicture};

