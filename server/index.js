import dotenv from 'dotenv/config';

import './db/connection';
import './webserver';

import Game from '#root/db/models/Game';

const game = new Game({
  name: "Cookie's new game",
  players: [],
  admins: [],
});

game.save(function(err, manga) {
  if (err) return console.log(err);
  console.log('saved');
});
