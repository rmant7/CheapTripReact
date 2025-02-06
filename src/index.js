import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'typeface-roboto';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Box, LinearProgress } from '@material-ui/core';
import { store } from './new_achitecture/general/redux/store';

console.log(performance.now())

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        <Suspense fallback={
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        }>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
);

console.log(performance.now())