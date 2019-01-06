import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  onError
} from 'mobx-react';

onError(error => {
  console.log(error)
});

import Sidebar from './components/SideBar';

import {
  IndexPage,
  ApiPage,
  SchemaPage
} from '../pages';

import './styles/spectre.css';
import './styles/styles.scss';

class Layout extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <div className="layout">
          <Sidebar/>
          <div className="layout__content">
            <Route path="/" exact component={IndexPage}/>
            <Route path="/api" component={ApiPage}/>
            <Route path="/schema" component={SchemaPage}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
