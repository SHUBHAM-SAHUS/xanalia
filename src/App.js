import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import IntlMain from "./IntlMain"
class App extends React.Component {
  componentDidMount() {
    // Remove `active` className from `.splash` element in `public/index.html`
    !document.querySelector('.splash') || document.querySelector('.splash').classList.remove('active');
  }
  render() {
    return (
      <Provider store={store}>
        <IntlMain />
      </Provider>
    );
  }
}

export default App;
