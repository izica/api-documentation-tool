import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Sidebar from './components/SideBar';

import './styles/spectre.css';
import './styles/styles.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <BrowserRouter>
            <div>
              <Switch />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
