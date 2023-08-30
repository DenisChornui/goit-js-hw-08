import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(playerTime, 1000));

function playerTime(data) {
  console.log(data);
  let seconds = data.seconds;
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
}

const currentSeconds = localStorage.getItem('videoplayer-current-time');
console.log(currentSeconds);
iframePlayer.setCurrentTime(currentSeconds);
