import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);
let currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

function onPlay(data) {
  let secondsplayer = data.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, secondsplayer);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(currentTime);