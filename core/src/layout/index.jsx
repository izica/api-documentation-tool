import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';

import {
    IndexPage,
    ApiPage,
    SchemaPage,
} from '../pages';

import './styles/spectre/spectre.scss';
import './styles/styles.scss';

const Layout = () => (
    <BrowserRouter>
        <div className="layout">
            <Sidebar />
            <div className="layout__content">
                <Route path="/" exact component={IndexPage} />
                <Route path="/api" component={ApiPage} />
                <Route path="/schema" component={SchemaPage} />
            </div>
        </div>
    </BrowserRouter>
);

export default Layout;
