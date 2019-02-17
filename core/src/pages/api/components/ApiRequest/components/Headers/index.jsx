import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Control from '../Control';
import Controls from '../Controls';

@observer
class Headers extends React.Component {
    static propTypes = {
        request: PropTypes.any
    };

    render = () => {
        const { request } = this.props;

        if (request.headers.length === 0) {
            return null;
        }
        const key = `Headers${request.type}${request.url}`;
        return (
            <React.Fragment>
                <div className="divider" data-content="Headers"/>
                <div className="api-request__block">
                    <Controls>
                        {request.headers.map(parameter => (
                            <Control
                                key={key+parameter.name}
                                parameter={parameter}
                            />
                        ))}
                    </Controls>
                </div>
            </React.Fragment>
        )
    }
}

export default Headers;
