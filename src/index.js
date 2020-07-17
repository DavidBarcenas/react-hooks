import React from 'react';
import ReactDOM from 'react-dom';
import { MemoHook } from './components/useMemo/MemoHook';
// import { Memorize } from './components/useMemo/Memorize';
// import { LayoutEffect } from './components/useLayoutEffect/Layouteffect';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { MultipleCustomHook } from './components/useFetch/MultipleCustomHook';
// import { FormCustomHook } from './components/useEffect/FormCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { CounterCustomHook } from './components/useState/CounterCustomHook';
// import { HooksApp } from './HooksApp';
// import { Counter } from './components/useState/Counter';

ReactDOM.render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>,
  document.getElementById('root')
);