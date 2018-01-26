import { LOAD_BLOCK } from '../actions/BlockActions';

const defaultBlock = {
  tabs: []
};

export const blockReducer = (state = defaultBlock, action) => {
  switch (action.type) {
    case LOAD_BLOCK:
      return action.block;
    default:
      return state;
  }
};