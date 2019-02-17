import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
    observable,
    computed
} from 'mobx';
import { Request } from 'core';
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom';

import Template from "components/Template";

import Badge from './components/Badge';
import Body from "./components/Body";
import Query from "./components/Query";
import Headers from "./components/Headers";
import Response from "./components/Response";

import api from 'config/api'

import './styles.scss';

@withRouter
@observer
class ApiRequest extends React.Component {
    static propTypes = {
        section: PropTypes.object,
        request: PropTypes.func,
        history: PropTypes.object
    };

    @observable request = new Request();
    @observable isOpened = false;
    @observable response = {
        visible: false,
        headers: {},
        status: {
            status: 200,
            statusText: '',
        },
        body: ''
    };

    componentDidMount = () => {
        const { request, history } = this.props;
        const item = new request();
        item.init();
        this.request = item;

        this.openByHash(window.location.hash);
        history.listen(location => this.openByHash(location.hash));
    };

    @computed
    get hash() {
        const { section, request } = this.props;
        return `${section.id}.${request.name}`;
    }

    @computed
    get fullUrl() {
        let url = this.request.baseUrl ?
            this.request.baseUrl + this.request.url :
            api.baseUrl + this.request.url;
        let params = this.request.query.filter(param => param.value !== null)
            .map(param => {
                return `${param.name}=${param.value}`
            });
        params = params.length > 0 ? '?' + params.join('&') : '';
        return url + params;
    }

    openByHash = (hash) => {
        if (this.isOpened === false) {
            this.isOpened = '#' + this.hash === hash;
        }
    }

    parseParameters = (parameters = []) => {
        const result = {};
        parameters.filter(parameter => parameter.value !== null)
            .forEach(parameter => {
                result[parameter.name] = parameter.value;
            })
        return result;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const headers = this.request.getHeaders(this.parseParameters(this.request.headers));
        const query = this.request.getQuery(this.parseParameters(this.request.query));
        const body = this.request.getBody(this.parseParameters(this.request.body));
        if (this.request.handleResponse === null) {
            this.request.handleResponse = this.handleResponse;
        }
        const baseUrl = this.request.baseUrl ? this.request.baseUrl : api.baseUrl;
        const url = baseUrl + this.request.url;
        const type = this.request.type;

        this.request.execute({
            baseUrl,
            url,
            type,
            headers,
            query,
            body,
        }).then(this.handleResponse)
    }

    handleResponse = (response) => {
        console.log(response);
        this.response.body = response.data;
        this.response.headers = response.headers;
        this.response.status = {
            status: response.status,
            statusText: response.statusText
        }
        this.response.visible = true;
    }

    render = () => {
        return (
            <div className="panel api-request" id={this.hash}>
                <div className="panel-header api-request__header"
                     onClick={() => {
                         this.isOpened = !this.isOpened
                     }}
                >
                    <Badge type={this.request.type}/>
                    <div className="api-request__title">
                        {this.request.title}
                    </div>
                    <div className="api-request__open">
                        <button type="button" className="btn btn-primary btn-action btn-sm">
                            <i className={this.isOpened ? "icon icon-arrow-up" : "icon icon-arrow-down"}/>
                        </button>
                    </div>
                </div>
                <Template visible={this.isOpened}>
                    <div className="api-request__url">
                        {this.fullUrl}
                    </div>
                    <Template visible={this.request.description !== ''}>
                        <div className="api-request__block">
                            {renderHTML(this.request.description)}
                        </div>
                    </Template>
                    <form onSubmit={this.handleSubmit}>
                        <Headers request={this.request}/>
                        <Query request={this.request}/>
                        <Body request={this.request}/>
                        <div className="api-request__block">
                            <button type="submit" className="btn">Send request</button>
                        </div>
                    </form>
                    <Response response={this.response}/>
                </Template>
            </div>
        )
    }
}

export default ApiRequest;
