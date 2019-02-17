import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import {computed} from 'mobx';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as models from 'config/models';

import './styles.scss';

class SidebarTabButtons extends React.Component {
    static propTypes = {
        onChange: PropTypes.func,
        tabs: PropTypes.object,
        tab: PropTypes.string,
    };

    handleTabChange = (e, value) => {
        const {onChange} = this.props;
        onChange({value});
    }

    getTabClassname = (tabName) => {
        const {tab} = this.props;

        return cn('tab-item', {
            active: tab === tabName,
        });
    }

    @computed
    get tabs() {
        const {tabs} = this.props;
        const tabsCopy = JSON.parse(JSON.stringify(tabs));

        if(Object.keys(models).length === 0){
            delete tabsCopy.models;
        }
        return tabsCopy;
    }

    render = () => {
        return (
            <div className="sidebar__tabs">
                <ul className="tab tab-block">
                    {Object.keys(this.tabs).map(tab => (
                        <li key={`SidebarTabButtons${tab}`} className={this.getTabClassname(tab)}>
                            <NavLink to={tab.toLowerCase()} onClick={e => this.handleTabChange(e, tab)}>
                                {this.tabs[tab]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SidebarTabButtons;
