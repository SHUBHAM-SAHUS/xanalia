
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

// Persisting Redux Store to maintain state...
let devtools, store;
const isClient = typeof window !== 'undefined';
if (isClient) {
  devtools =
  // @ts-ignore
    process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
      ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f;

  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'Xanalia',
    storage,
  };

  store = createStore(persistReducer(persistConfig, rootReducer), compose(applyMiddleware(thunk), devtools));

  // @ts-ignore
  store.__PERSISTOR = persistStore(store);
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default store;
