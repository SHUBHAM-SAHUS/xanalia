import { combineReducers } from 'redux';

import sidebar from './sidebarReducers';
import auth from './authReducer';
import theme from './themeReducer';
import languageReducer from './languageReducer';
import { reducer as toastr } from 'react-redux-toastr';

export default combineReducers({
  auth,
  theme,
  sidebar,
  toastr,
  languageReducer
});
