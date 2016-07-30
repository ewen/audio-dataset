var $ = require('jquery');
var moment = require('moment');
var player = require('./player');
var records = require('../data/records.json').search.results

var i = 0

var iteration = function (gap) {
  setTimeout(function () {
    var record = records[i]
    var year = moment(record.display_date).year()
    var notes = [
      (record.description.length % 8) + 1,
      (parseInt(year, 10) % 8) + 1,
      (record.title.length % 8) + 1,
      (record.id % 8) + 1,
      1
    ]

    var j = 0
    notes.forEach(function (note) {
      setTimeout(function () {
        console.log(note ? note : 1)
        player.playNote(note ? note : 1)
      }, 750 * j)
      j++
    })

    $('#title').text(record.title)
    $('#date').text(record.display_date)
    $("#picture").attr("src", "http://150.242.42.192:3001/api/image/" + record.id);
    i += 1
    if (i >= records.length) return
    iteration(10000)
  }, gap)
}

iteration(0)

// var song = records.search.results.map(function (record) {
//   var note = (record.description.length % 8) + 1
//   return [note, 1000]
// });

// var song = [];

// // iterate through song and play
// var songPos = 0;
// var playSong = function (gap) {
//   setTimeout(function () {
//     playNote(song[songPos][0]);
//     songPos++;
//     if (songPos >= song.length) return;
//     playSong(song[songPos][1]);
//   }, gap);
// }

// console.log(song)

// player.playSong(song);

// var topGunTheme = [
//   [1, 500],
//   [5, 500],
//   [5, 500],
//   [4, 500],
//   [3, 250],
//   [4, 250],
//   [3, 250],
//   [2, 250],
//   [2, 500],
//   [1, 500],
//   [2, 250],
//   [3, 250],
//   [2, 500],
//   [3, 250],
//   [4, 250],
//   [3, 500],
//   [1, 250],
//   [3, 250],
//   [2, 500],
// ];
