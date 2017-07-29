import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {redirect, StaticRouter} from 'react-router'

import App from '../../../client/components/App'


import template from './template'
import data from '../../../data'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

const renderPage = (req, res) => {
    const helmet = Helmet.renderStatic();

    const context = {};

    const markup = renderToString(
        <Provider store={createStore(x => x, data)}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    res.send(template({
        body: markup,
        helmet: helmet,
        initialState: JSON.stringify(data),
    }));
}

export default renderPage;