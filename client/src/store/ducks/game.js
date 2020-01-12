// actions
const CLEAR = 'game/CLEAR';
const ADD = 'game/ADD';

const DEFAULT_STATE = [];

// const update = (state, mutations) => Object.assign({}, state, mutations);

const gameReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case ADD:
      state = [...state, ...action.game];
      // console.log(z);
      break;
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

export const clearGame = () => {
  return { type: CLEAR };
};
