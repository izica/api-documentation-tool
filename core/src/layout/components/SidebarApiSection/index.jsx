import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as Link } from 'react-router-hash-link';
import { REQUEST_TYPE } from 'core';

import './styles.scss';

const getType = (type) => {
    if (type === REQUEST_TYPE.POST) {
        return <span className="bg-primary p-1 mr-2 s-rounded">POST</span>;
    }
    if (type === REQUEST_TYPE.PUT) {
        return <span className="bg-warning p-1 mr-2 s-rounded">PUT</span>;
    }
    if (type === REQUEST_TYPE.DELETE) {
        return <span className="bg-delete p-1 mr-2 s-rounded">DELETE</span>;
    }
    return <span className="bg-success p-1 mr-2 s-rounded">GET</span>;
}

const SidebarApiSection = ({ item }) => {
    return (
        <div className="sidebar__content">
            <div className="sidebar-section">
                <Link className="sidebar-section__title" to={`/api#${item.id}`}>
                    {item.title}
                </Link>
                <div className="sidebar-section__body">
                    <ul className="menu menu-nav">
                        {item.requests.map(Item => {
                            const request = new Item();
                            request.init();
                            return (
                                <li key={`SidebarApiSection${request.constructor.name}`} className="menu-item">
                                    <Link className="menu-item" to={`/api#${item.id}.${request.constructor.name}`}>
                                        {getType(request.type)}
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

SidebarApiSection.propTypes = {
    item: PropTypes.object
};


export default SidebarApiSection;
