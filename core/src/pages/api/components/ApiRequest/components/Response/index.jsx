import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
    computed
} from 'mobx';

import Highlight from 'react-highlight.js';

import './styles.scss';

@observer
class Response extends React.Component {
    static propTypes = {
        response: PropTypes.object,
    };

    getLanguage = (headers) => {
        if (headers['content-type'] === undefined) {
            return 'plaintext';
        }
        const contentType = headers['content-type'];
        if (contentType.indexOf('xml') > -1) {
            return 'xml';
        }
        if (contentType.indexOf('json') > -1) {
            return 'json';
        }
        return 'plaintext';
    }

    getBody = (body) => {
        if (typeof body === 'string') {
            return body;
        }
        return JSON.stringify(body, null, '  ');
    }

    @computed
    get successResult() {
        const response = this.props.response.object;

        console.log(response);

        if(response.data === undefined || response.headers === undefined || response.status === undefined || response.statusText === undefined){
            return '';
        }

        const status = {
            status: response.status,
            statusText: response.statusText,
        };

        return (
            <React.Fragment>
                <div className="divider" data-content="Response"/>
                <div className="divider" data-content="Headers"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(response.headers, null, '  ')}
                    </Highlight>
                </div>
                <div className="divider" data-content="Status"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(status, null, '  ')}
                    </Highlight>
                </div>
                <div className="divider" data-content="Body"/>
                <div className="api-request__block api-request__block--overflow">
                    <Highlight language={this.getLanguage(response.headers)}>
                        {this.getBody(response.data)}
                    </Highlight>
                </div>
            </React.Fragment>
        )
    }

    @computed
    get errorResult() {
        const response = this.props.response.errorObject.response;
        const status = {
            status: response.status,
            statusText: response.statusText,
        };

        return (
            <React.Fragment>
                <div className="divider" data-content="Response"/>
                <div className="divider" data-content="Headers"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(response.headers, null, '  ')}
                    </Highlight>
                </div>
                <div className="divider" data-content="Status"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(status, null, '  ')}
                    </Highlight>
                </div>
                <div className="divider" data-content="Body"/>
                <div className="api-request__block">
                    <Highlight language={this.getLanguage(response.headers)}>
                        {this.getBody(response.data)}
                    </Highlight>
                </div>
            </React.Fragment>
        )
    }

    @computed
    get criticalError() {
        const response = this.props.response.errorObject;
        return (
            <React.Fragment>
                <div className="divider" data-content="Response"/>
                <div className="divider" data-content="Status"/>
                <div className="api-request__block">
                    <Highlight language="plaintext">
                        Critical Error
                    </Highlight>
                </div>
                <div className="divider" data-content="Body"/>
                <div className="api-request__block">
                    <Highlight language={this.getLanguage(response.message)}>
                        {this.getBody(response.message)}
                    </Highlight>
                </div>
            </React.Fragment>
        )
    }

    render = () => {
        const { response } = this.props;

        if (response.state === 'waiting') {
            return null;
        }

        if (response.state === 'loading') {
            return (
                <div className="api-request__block">
                    <div className="loading loading-lg"/>
                </div>
            );
        }

        if (response.state === 'error') {
            if (response.errorObject.response !== undefined) {
                return this.errorResult
            } else {
                return this.criticalError;
            }
        }

        return this.successResult;
    }
}

export default Response;
