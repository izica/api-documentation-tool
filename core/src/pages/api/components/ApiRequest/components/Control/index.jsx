import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class Control extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    render = () => {
        return (
            <div className="form-group">
                <label className="form-label" htmlFor="input-example-1">Name</label>
                <input className="form-input" type="text" id="input-example-1" placeholder="Name"/>
            </div>
        )
    }
}

export default Control;
