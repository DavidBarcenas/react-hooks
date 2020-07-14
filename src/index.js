import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './components/useState/Counter';
// import { HooksApp } from './HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);