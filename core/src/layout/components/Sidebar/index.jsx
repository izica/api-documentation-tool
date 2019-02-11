import React from 'react';
import {
    observable,
    computed
} from 'mobx';
import { observer } from 'mobx-react';
import { Template } from 'components';

import api from 'config/api';
import * as models from 'config/models';

import SidebarTabButtons from '../SidebarTabButtons';
import SidebarApiSection from '../SidebarApiSection';

import './styles.scss';
import { NavHashLink as Link } from "react-router-hash-link";

@observer
class Sidebar extends React.Component {
    tabs = {
        Api: 'Api',
        Models: 'Models',
    };

    @observable activeTab = 'Api';

    @computed
    get models() {
        return Object.keys(models).map(key => models[key]);
    }

    render = () => {
        return (
            <div className="sidebar">
                <div className="sidebar__logo">
                    ProjectDocJS
                </div>
                <SidebarTabButtons
                    tabs={this.tabs}
                    tab={this.activeTab}
                    onChange={(e) => {
                        this.activeTab = e.value;
                    }}
                />
                <Template visible={this.activeTab === 'Api'}>
                    {api.sections.map(section => <SidebarApiSection key={`Sidebar${section.name}`} item={section}/>)}
                </Template>
                <Template visible={this.activeTab === 'Models'}>
                    <ul className="menu menu-nav">
                        {this.models.map(model => {
                            const m = new model();
                            m.init();
                            console.log(m);
                            return (
                                <li key={`SidebarModelItem${model.name}`} className="menu-item">
                                    <Link className="menu-item" to={`/model#${model.name}`}>
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
