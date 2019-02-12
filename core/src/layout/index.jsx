import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';

import {
    IndexPage,
    ApiPage,
    ModelsPage,
} from '../pages';

import './styles/spectre/spectre.scss';
import './styles/spectre/spectre-icons.scss';
import './styles/styles.scss';

const Layout = () => (
    <BrowserRouter>
        <div className="layout">
            <Sidebar/>
            <div className="layout__content">
                <div className="columns">
                    <div className="column col-10 col-mx-auto" style={{ paddingTop: 50 }}>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/api" component={ApiPage}/>
                        <Route path="/models" component={ModelsPage}/>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default Layout;
