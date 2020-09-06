import React, { Fragment } from 'react';
import { Provider as ReactReduxProvider } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalRouter from './GlobalRouter';
import store from '../src/services/Redux/Store';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ReactReduxProvider store={store}>
        <GlobalRouter />
      </ReactReduxProvider>
    </Fragment >
  );
}

export default App;
