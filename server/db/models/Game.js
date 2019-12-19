import mongoose from 'mongoose';

export const schema = new mongoose.Schema({
  name: String,
  players: Array,
  admins: Array,
});

const Game = mongoose.model('Game', schema);

export default Game;
