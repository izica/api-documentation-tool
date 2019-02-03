import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import ApiRequest from '../ApiRequest';

class ApiSection extends React.Component {
    static propTypes = {
        section: PropTypes.object
    };
    func = () => {};
    render = () => {
        const { section } = this.props;
        return (
            <React.Fragment>
                <h3 id={section.id}>{section.title}</h3>
                <div style={{marginBottom: 10}}>
                    {renderHTML(section.description)}
                </div>
                {section.requests.map(request => (
                    <ApiRequest
                        key={`ApiSection${request.name}`}
                        request={request}
                        section={section}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default ApiSection;
