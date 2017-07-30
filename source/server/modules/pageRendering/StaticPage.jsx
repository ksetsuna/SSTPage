import React from 'react'

import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router'
import {createStore} from 'redux'

import App from '../../../client/components/App'


export default ({initialState, location}) =>
    <Provider store={createStore(x => x, initialState)}>
        <StaticRouter context={{}} location={location}>
            <App/>
        </StaticRouter>
    </Provider>;