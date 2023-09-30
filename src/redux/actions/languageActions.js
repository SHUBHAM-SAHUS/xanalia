import * as types from '../constants';

export function changeLanguage(content) {
  return {
    type: types.SET_LANGUAGE,
    payload: content 
  };
}
