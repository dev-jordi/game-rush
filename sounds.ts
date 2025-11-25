
// This file uses the global Howl and Howler objects injected by the script in index.html
declare var Howl: any;
declare var Howler: any;

// Using reliable audio sources for background music
const sounds = {
  move: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2022/03/15/audio_2828a27a82.mp3?filename=swoosh-89547.mp3'], volume: 0.7 }),
  complete: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2022/03/10/audio_c3b0923528.mp3?filename=success-1-6297.mp3'], volume: 0.5 }),
  levelUp: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2022/10/17/audio_3203f32252.mp3?filename=level-up-191995.mp3'] }),
  gameOver: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2022/03/24/audio_34b07c40d1.mp3?filename=videogame-death-sound-43894.mp3'] }),
  start: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2021/08/04/audio_51a2d1a384.mp3?filename=short-success-sound-glockenspiel-treasure-video-game-1-18534.mp3'] }),
  win: new Howl({ src: ['https://cdn.pixabay.com/download/audio/2022/01/21/audio_141a0247a3.mp3?filename=nice-thought-2-36411.mp3'] }),
  bgm: new Howl({ 
    src: ['https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3'], 
    html5: true, 
    loop: true, 
    volume: 0.3,
    onplayerror: function() {
      sounds.bgm.once('unlock', function() {
        sounds.bgm.play();
      });
    }
  }),
};

export const soundManager = {
  play: (soundName: keyof typeof sounds) => {
    if (sounds[soundName]) {
      sounds[soundName].play();
    }
  },
  playBgm: () => {
    if (sounds.bgm && !sounds.bgm.playing()) {
      sounds.bgm.play();
    }
  },
  stopBgm: () => {
    if (sounds.bgm) {
      sounds.bgm.stop();
    }
  },
  setVolume: (volume: number) => {
    Howler.volume(volume);
  },
};
