import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SlickApp from './SlickApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SlickApp />, document.getElementById('root'));
registerServiceWorker();
