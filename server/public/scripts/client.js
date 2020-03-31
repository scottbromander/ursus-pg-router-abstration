$(document).ready(init);

let songStore = [];

function init() {
  console.log("JQ IS UP AND ROLLIN!");
  getSongs();
}

function getUsers() {}

function postUser() {}

function getSongs() {
  $.ajax({
    method: "GET",
    url: "/songs",
  })
    .then(response => {
      songStore = response;
      renderSongs();
    })
    .catch(err => {
      console.warn(err);
    });
}

function postSong() {}

function renderSongs() {
  $(".js-container-songs").empty();
  for (let song of songStore) {
    $(".js-container-songs").append(`
        <div>
            <p>${song.artist} - ${song.track}</p>
        </div>
    `);
  }
}
