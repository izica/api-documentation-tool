import React from 'react';
import {
    observable,
} from 'mobx';
import { observer } from 'mobx-react';
import { Template } from 'components';

import SidebarTabButtons from '../SidebarTabButtons';
import SidebarSection from '../SidebarSection';

import './styles.scss';

import api from '../../../../../config/api';

// eslint-disable-next-line
console.log(api);

@observer
class Sidebar extends React.Component {
    tabs = {
        Api: 'Api',
        Schema: 'Schema',
    };

    @observable activeTab = 'Api';

    render = () => (
        <div className="sidebar">
            <div className="sidebar__logo">
                ProjectDocJS
            </div>
            <SidebarTabButtons
                tabs={this.tabs}
                tab={this.activeTab}
                onChange={(e) => { this.activeTab = e.value; }}
            />
            <Template visible={this.activeTab === 'Api'}>
                {api.sections.map(section => <SidebarSection key={`Sidebar${section.name}`} item={section}/>)}
            </Template>
        </div>
    )
}

export default Sidebar;
