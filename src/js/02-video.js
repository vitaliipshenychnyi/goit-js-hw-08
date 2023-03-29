import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKeyTime = 'videoplayer-current-time';

// Відстеження оновлення часу та збереження у локадьне сховище
// із затримкою в 1 секунду, використовуючи бібліотеку lodash
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({ seconds }) {
  localStorage.setItem(storageKeyTime, Math.round(seconds));
}

// Відновлення програвання зі збереженої позиції
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(localStorage.getItem(storageKeyTime))
  .then(function (seconds) {
    seconds = 10;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'The time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        break;
    }
  });
