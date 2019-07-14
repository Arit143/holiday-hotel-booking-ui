import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {/* <CssBaseline /> */}
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}