import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import './index.css';
import App from './App';
import './css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { configStore } from './configStore/configStore';

import { BrowserRouter as Router } from 'react-router-dom';

const store = configStore();

ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
