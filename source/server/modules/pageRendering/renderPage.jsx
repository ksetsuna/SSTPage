import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'

import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router'
import {createStore} from 'redux'

import App from '../../../client/components/App'
import data from '../../../data'


import template from './template'

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
};

export default renderPage;