import React from 'react';
import PropTypes from 'prop-types';

import {
    REQUEST_TYPE
} from 'core';

const Badge = ({ type }) => {
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

Badge.propTypes = {
    type: PropTypes.string
};

export default Badge;
