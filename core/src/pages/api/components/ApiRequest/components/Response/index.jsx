import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
    computed
} from 'mobx';

import Highlight from 'react-highlight.js';

import Template from "components/Template";

import './styles.scss';

@observer
class Response extends React.Component {
    static propTypes = {
        response: PropTypes.object,
    };

    @computed
    get language() {
        const { response } = this.props;
        if (response.headers['content-type'] === undefined) {
            return 'plaintext';
        }
        const contentType = response.headers['content-type'];
        if (contentType.indexOf('xml') > -1) {
            return 'xml';
        }
        if (contentType.indexOf('json') > -1) {
            return 'json';
        }
        return 'plaintext';
    }

    @computed
    get body() {
        const { response } = this.props;
        if(this.language === 'json'){
            return JSON.stringify(response.body, null, "  ");
        }
        return response.body;
    }

    render = () => {
        const { response } = this.props;
        return (

            <Template visible={response.visible}>
                <div className="divider" data-content="Response"/>
                <div className="divider" data-content="Headers"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(response.headers, null, "  ")}
                    </Highlight>
                </div>
                <div className="divider" data-content="Status"/>
                <div className="api-request__block">
                    <Highlight language="json">
                        {JSON.stringify(response.status, null, "  ")}
                    </Highlight>
                </div>
                <div className="divider" data-content="Body"/>
                <div className="api-request__block">
                    <Highlight language={this.language}>
                        {this.body}
                    </Highlight>
                </div>
            </Template>
        )
    }
}

export default Response;
