import React from 'react';
import ReactDOM from 'react-dom';
import { CounterCustomHook } from './components/useState/CounterCustomHook';
// import { HooksApp } from './HooksApp';
// import { Counter } from './components/useState/Counter';

ReactDOM.render(
  <React.StrictMode>
    <CounterCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);