import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHook } from './components/useFetch/MultipleCustomHook';
// import { FormCustomHook } from './components/useEffect/FormCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { CounterCustomHook } from './components/useState/CounterCustomHook';
// import { HooksApp } from './HooksApp';
// import { Counter } from './components/useState/Counter';

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);