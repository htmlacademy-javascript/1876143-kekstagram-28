import {createObjects} from './data.js';


const photosContainer = document.querySelector('.pictures');

const newPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');


const newUserPhotos = createObjects();

newUserPhotos.forEach((photo) => {
  const newUserPhoto = newPhotoTemplate.cloneNode(true);
  newUserPhoto.querySelector('[src]').setAttribute('src', photo.url);
  newUserPhoto.querySelector('.picture__comments').textContent = photo.comments[0].id;
  newUserPhoto.querySelector('.picture__likes').textContent = photo.likes;
  photosContainer.appendChild(newUserPhoto);
});
