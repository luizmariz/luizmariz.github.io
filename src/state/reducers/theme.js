import { SET_THEME } from '../actions/theme';

let state = 'light';

if (typeof window !== 'undefined') {
  try {
    state = localStorage.getItem('theme');
  } catch {
    localStorage.setItem('theme', state);
  }
}

const initialState = state;

export default function theme(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
