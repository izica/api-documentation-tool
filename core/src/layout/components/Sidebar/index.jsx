import React from 'react';
import {
    observable,
    computed
} from 'mobx';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { NavHashLink as Link } from "react-router-hash-link";
import PropTypes from 'prop-types';
import { Template } from 'components';
import api from 'config/api';
import app from 'config/app';
import * as models from 'config/models';

import SidebarTabButtons from '../SidebarTabButtons';
import SidebarApiSection from '../SidebarApiSection';

import './styles.scss';

@withRouter
@observer
class Sidebar extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }

    tabs = {
        api: 'Api',
        models: 'Models',
    };

    @observable activeTab = 'api';

    componentDidMount = () => {
        const {history} = this.props;
        const tab = history.location.pathname.substr(1);
        if (this.tabs[tab]) {
            this.activeTab = tab;
        }
    };

    @computed
    get models() {
        return Object.keys(models).map(key => models[key]);
    }

    render = () => {
        return (
            <div className="sidebar">
                <div className="sidebar__logo">
                    {app.appName}
                </div>
                <SidebarTabButtons
                    tabs={this.tabs}
                    tab={this.activeTab}
                    onChange={(e) => {
                        this.activeTab = e.value;
                    }}
                />
                <Template visible={this.activeTab === 'api'}>
                    {api.sections.map(section => <SidebarApiSection key={`Sidebar${section.name}`} item={section}/>)}
                </Template>
                <Template visible={this.activeTab === 'models'}>
                    <ul className="menu menu-nav">
                        {this.models.map(model => {
                            return (
                                <li key={`SidebarModelItem${model.name}`} className="menu-item">
                                    <Link className="menu-item" to={`/models#${model.name}`}>
                                        {model.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                </Template>
            </div>
        )
    }
}

export default Sidebar;
