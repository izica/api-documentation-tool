import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ children }) => (
    <table className="table" style={{tableLayout: 'fixed'}}>
        <thead>
            <tr>
                <th width="130">Parameter</th>
                <th width="25%">Value</th>
                <th>Description</th>
                <th width="130">Data Type</th>
            </tr>
        </thead>
        <tbody>{children}</tbody>
    </table>
);

Controls.propTypes = {
    children: PropTypes.array
}

export default Controls;
