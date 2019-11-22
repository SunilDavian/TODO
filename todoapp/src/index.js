import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './routes';
import reducer from './store/reducer';
import './index.css';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const middleware = compose(
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    ));



const store = createStore(reducer, middleware);


render(<Provider store={store}>
    <Router />
</Provider>, document.getElementById('root'));
