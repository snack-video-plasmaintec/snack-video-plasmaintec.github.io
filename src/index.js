import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
    folders: {
        0: {
            id: 0,
            name: '__ROOT',
            folders: [1, 2],
            files: [],
            parent: null
        },
        1: {
            id: 1,
            name: 'Summer',
            folders: [],
            files: [1, 2],
            parent: 0
        },
        2: {
            id: 2,
            name: 'Winter',
            folders: [],
            files: [3],
            parent: 0
        }
    },
    files: {
        1: {
            id: 1,
            name: 'hot hot hot',
            parent: 1
        },
        2: {
            id: 2,
            name: 'shall i compare thee',
            parent: 1
        },
        3: {
            id: 3,
            name: 'polar',
            parent: 2
        }
    },
    showAll: true
}

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
