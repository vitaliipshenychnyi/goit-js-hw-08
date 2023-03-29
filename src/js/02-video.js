import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Відстеження оновлення часу та збереження у локадьне сховище
// із затримкою в 1 секунду, використовуючи бібліотеку lodash
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', Math.round(seconds));
}

// Відновлення програвання зі збереженої позиції
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
