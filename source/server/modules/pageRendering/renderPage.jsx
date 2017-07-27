import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter, redirect } from 'react-router'

import template from './template'
import loadPageData from './loadPageData'
import packageBrowserPageData from './packageBrowserPageData'

import App from '../../../client/components/App/App'

const renderPage = (req, res) => {
  let helmet, pageData;

  helmet = Helmet.renderStatic();
  pageData = loadPageData(req.url);

  let markup;

  const context = {};

  markup = renderToString(
            <StaticRouter context={context} location={req.url}>
              <App serverRequest={req} pageData={pageData.object} initPathname={req.url}/>
            </StaticRouter>
          )

  res.send(template({
    body: markup,
    helmet: helmet,
    pageData: packageBrowserPageData(pageData.string),
  }));
}

export default renderPage;