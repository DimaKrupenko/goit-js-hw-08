import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("play", function (event) {
  console.log("played the video!", event);
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

player.on("pause", function (event) {
  const sec = event.seconds;
  console.log(sec, event);
});

console.log(sec);
