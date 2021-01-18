import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Badge from './components/Badge'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Badge/>
  </React.StrictMode>,
  document.getElementById('root')
);
