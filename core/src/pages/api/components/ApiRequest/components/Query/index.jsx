import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Control from '../Control';
import Controls from '../Controls';

@observer
class Query extends React.Component {
    static propTypes = {
        request: PropTypes.any
    };

    render = () => {
        const { request } = this.props;

        if (request.query.length === 0) {
            return null;
        }

        const key = `Query${request.type}${request.url}`;
        return (
            <React.Fragment>
                <div className="divider" data-content="Query"/>
                <div className="api-request__block">
                    <Controls>
                        {request.query.map(parameter => (
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

export default Query;
