import {APPLY_LANGUAGE} from '../actions/types';

export default (state = 'en', action) => {
  switch (action.type) {
    case APPLY_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
