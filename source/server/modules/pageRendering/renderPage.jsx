import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {redirect, StaticRouter} from 'react-router'

import App from '../../../client/components/App'
import loadPageData from './loadPageData'
import packageBrowserPageData from './packageBrowserPageData'

import template from './template'

const renderPage = (req, res) => {
    let helmet, pageData;

    helmet = Helmet.renderStatic();
    pageData = loadPageData(req.url);

    let markup;

    const context = {};

    markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App/>
        </StaticRouter>
    );

    res.send(template({
        body: markup,
        helmet: helmet,
        pageData: packageBrowserPageData(pageData.string),
    }));
}

export default renderPage;