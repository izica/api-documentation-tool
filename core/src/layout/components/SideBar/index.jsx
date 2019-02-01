import React from 'react';
import {
    observable,
    action
} from 'mobx';
import { observer } from 'mobx-react';

import cn from 'classnames';

import './styles.scss';

import api from '../../../../../config/api';

console.log(
    api
);


@observer
class Sidebar extends React.Component {
    TABS = {
        Api: 'Api',
        Schema: 'Schema'
    };

    @observable tabName = 'Api';

    @action
    handleTabChange = (e, tabName) => {
        e.preventDefault();
        this.tabName = tabName;
        console.log(this.tabName);
    }

    getTabClassname = (tabName) => {
        return cn('tab-item', {
            'active': this.tabName === tabName
        });
    }

    render = () => {
        return (
            <div className="sidebar">
                <div className="sidebar__logo">
                    ProjectDocJS
                </div>
                <div className="sidebar__tabs">
                    <ul className="tab tab-block">
                        {Object.keys(this.TABS).map(tabName => {
                            return (
                                <li key={tabName} className={this.getTabClassname(tabName)}>
                                    <a
                                        href="#"
                                        onClick={(e) => this.handleTabChange(e, tabName)}
                                    >
                                        {tabName}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="sidebar__content">
                    <div className="sidebar-section">
                        <div className="sidebar-section__title">
                            Components
                        </div>
                        <div className="sidebar-section__body">
                            <ul className="menu menu-nav">
                                <li className="menu-item">
                                    <a href="#">Accordions</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Avatars</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
