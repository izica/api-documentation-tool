import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as Link } from 'react-router-hash-link';

import './styles.scss';

const SidebarSection = ({ item }) => {
    return (
        <div className="sidebar__content">
            <div className="sidebar-section">
                <Link className="sidebar-section__title" to={`/api#${item.url}`}>
                    {item.title}
                </Link>
                <div className="sidebar-section__body">
                    <ul className="menu menu-nav">
                        {item.requests.map(Item => {
                            const request = new Item();
                            request.init();
                            return (
                                <li key={`SidebarSection${item.title}`} className="menu-item">
                                    <Link className="menu-item" to={`/api#${item.url}.${request.constructor.name}`}>
                                        {request.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

SidebarSection.propTypes = {
    item: PropTypes.object
};


export default SidebarSection;
