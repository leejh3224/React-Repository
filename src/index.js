import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'grommet/grommet.min.css';

const rootElement = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>, rootElement
  );
};

render(App);

  if (module.hot) {
    module.hot.accept(() => {
      render(App);
    });
  }
