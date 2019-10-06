import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Router from './routes';
import reducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const store = createStore(reducers);


render(<Provider store={store}>
    <Router/>
</Provider>, document.getElementById('root'));