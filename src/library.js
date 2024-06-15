import './js/utils/active-page';
import './js/utils/scroll-top-btn';
import './js/utils/mobile-menu';

import './js/partials/hero';
import './js/partials/dropdown';
import './js/partials/library';
import { initLibrary } from './js/partials/library';
import { refs } from './js/refs';
import { handlerMovieListClick } from './js/partials/library';

refs.libraryMovieList.addEventListener('click', handlerMovieListClick);
initLibrary();