import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const store = createStore((s = {}) => s, window && window.__initialState || null);
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.querySelector('#root'));