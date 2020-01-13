// actions
const CLEAR = 'game/CLEAR';
const ADD = 'game/ADD';
const SET = 'game/SET';

const DEFAULT_STATE = [];

// const update = (state, mutations) => Object.assign({}, state, mutations);

const gameReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case ADD:
      return [...state, action.game];
    case SET:
      return action.game;
    case CLEAR:
      return null;
  }
  return state;
};

export default gameReducer;

// action creators
export const addGame = game => {
  return { game, type: ADD };
};

export const setGames = game => {
  return { game, type: SET };
};

export const clearGame = () => {
  return { type: CLEAR };
};
