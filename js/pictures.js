//import {createObjects} from './data.js';


const photosContainer = document.querySelector('.pictures');

const newPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPhoto = ({comments, url, likes, description, id}) => {
  const newUserPhoto = newPhotoTemplate.cloneNode(true);
  newUserPhoto.querySelector('.picture__img').src = url;
  newUserPhoto.querySelector('.picture__comments').textContent = comments[0].id;
  newUserPhoto.querySelector('.picture__likes').textContent = likes;
  newUserPhoto.querySelector('.picture__info').alt = description;
  newUserPhoto.dataset.newUserPhotoId = id;

  return newUserPhoto;
};

const getNewUserPhotos = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const newPhoto = createPhoto(picture);
    fragment.append(newPhoto);
  });

  photosContainer.append(fragment);
};

export {getNewUserPhotos};


/*
const newUserPhotos = createObjects();

newUserPhotos.forEach((photo) => {
  const newUserPhoto = newPhotoTemplate.cloneNode(true);
  newUserPhoto.querySelector('[src]').setAttribute('src', photo.url);
  newUserPhoto.querySelector('.picture__comments').textContent = photo.comments[0].id;
  newUserPhoto.querySelector('.picture__likes').textContent = photo.likes;
  photosContainer.appendChild(newUserPhoto);
});
*/

