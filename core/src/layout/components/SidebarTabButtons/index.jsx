import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

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

    render = () => {
        const {tabs} = this.props;
        return (
            <div className="sidebar__tabs">
                <ul className="tab tab-block">
                    {Object.keys(tabs).map(tab => (
                        <li key={`SidebarTabButtons${tab}`} className={this.getTabClassname(tab)}>
                            <NavLink to={tab.toLowerCase()} onClick={e => this.handleTabChange(e, tab)}>{tab}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SidebarTabButtons;
