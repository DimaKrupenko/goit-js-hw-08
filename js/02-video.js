import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("play", function (event) {
  console.log("played the video!", event);
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const onPlay = throttle((data) => {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

player.on("timeupdate", onPlay);

player
  .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        "videoplayer-current-time" < 0;
        break;

      default:
        // some other error occurred
        error.name;
        break;
    }
  });
