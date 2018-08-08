import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// css
import './App.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
