import {createObjects} from './data.js';
// eslint-disable-next-line no-console

import './pictures.js';
import {getNewUserPhotos} from './pictures.js';
getNewUserPhotos(createObjects());


import {renderPictures} from './get-id-picture.js';
renderPictures(createObjects());


import './show-and-close-big-picture.js';
import {closeBigPicturesByEsc} from './show-and-close-big-picture.js';
closeBigPicturesByEsc();
