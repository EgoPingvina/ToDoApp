import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import './index.css';
 
ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>, 
  document.getElementById('root')
);