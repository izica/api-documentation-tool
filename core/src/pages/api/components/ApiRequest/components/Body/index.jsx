import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Control from "../Control";

@observer
class Body extends React.Component {
    static propTypes = {
        request: PropTypes.func
    };

    render = () => {
        const { request } = this.props;

        if (request.body.length === 0) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="divider" data-content="Body"/>
                <div className="api-request__block">
                    {request.body.map(parameter => <Control key={`Body${parameter.name}`} parameter={parameter}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default Body;
