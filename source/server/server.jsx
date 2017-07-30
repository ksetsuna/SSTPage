import Express from 'express'
import {Server} from 'http'
import path from 'path'

import React from 'react'
import {Helmet} from 'react-helmet'

import configuration from '../../configuration'

import {actions, getStore} from '../modules/fsm'
import getDataProvider from './modules/dataProviderList'
import renderPage from './modules/pageRendering/renderPage'
import StaticPage from './modules/pageRendering/StaticPage'
import template from './modules/pageRendering/template'

import sendApiData from './modules/sendApiData'

import './modules/welcome'

const {renderToString} = require('react-dom/server');

const app = new Express();
const server = new Server(app);

const deploymentPath = configuration.path.deployment;
const userPath = configuration.path.user;


global.window = {};

app.use('/assets/', Express.static(path.join(deploymentPath, 'assets')));
app.use('/assets/user/', Express.static(userPath));

app.get('/api/journal/list', (req, res) => {
    sendApiData(req, res, getDataProvider('journalList'))
});
app.get('/api/publication/list', (req, res) => {
    sendApiData(req, res, getDataProvider('publicationList'))
});
app.get('/api/publication/detail/:id', (req, res) => {
    sendApiData(req, res, getDataProvider('publicationDetail', req.params))
});
app.get('/api/member/list', (req, res) => {
    sendApiData(req, res, getDataProvider('memberList'))
});

app.get('/member', (req, res) => {

    const store = getStore();

    store.dispatch(actions.loadMembers(require('../data/members.yml')));

    const initialState = store.getState();

    const helmet = Helmet.renderStatic();
    const body = renderToString(<StaticPage location={req.url} initialState={initialState}/>);

    res.send(template({
        body: body,
        helmet: helmet,
        initialState: JSON.stringify(initialState),
    }));
});


app.get('/*', renderPage);

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
    if(err) {
        return console.error(err);
    }

    console.info(`Server running on http://localhost:${port} [${env}]`);
});