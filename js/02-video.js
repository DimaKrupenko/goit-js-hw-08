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
  sessionStorage.setItem("videoplayer-current-time", JSON.stringify(sec));
});

player.setCurrentTime(30.456).then(function (seconds) {
  const playPlayer = localStorage.getItem("videoplayer-current-time");
  // seconds = the actual time that the player seeked to
});
//   .catch(function (error) {
//     switch (error.name) {
//       case "RangeError":
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
