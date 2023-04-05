import {getNewUserPhotos} from './pictures';
import {showBigPicture} from './show-and-close-big-picture';

const container = document.querySelector('.pictures');


const renderPictures = (pictures) => {
  container.addEventListener('click', (evt) => {
    const newUserPhoto = evt.target.closest('[data-new-user-photo-id]');
    if (!newUserPhoto){
      return;
    }

    const picture = pictures.find((item) => item.id === + newUserPhoto.dataset.newUserPhotoId);

    showBigPicture(picture);
  });
  getNewUserPhotos(pictures, container);
};

export {renderPictures};

