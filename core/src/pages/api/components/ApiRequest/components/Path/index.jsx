import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Control from '../Control';
import Controls from '../Controls';

@observer
class Path extends React.Component {
    static propTypes = {
        request: PropTypes.any
    };

    render = () => {
        const { request } = this.props;

        if (request.path.length === 0) {
            return null;
        }

        const key = `Path${request.type}${request.url}`;
        return (
            <React.Fragment>
                <div className="divider" data-content="Path"/>
                <div className="api-request__block">
                    <Controls>
                        {request.path.map(parameter => (
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

export default Path;
