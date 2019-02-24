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

import Template from 'components/Template';

import Badge from './components/Badge';
import Body from './components/Body';
import Query from './components/Query';
import Headers from './components/Headers';
import Response from './components/Response';

import api from 'config/api'

import './styles.scss';
import Path from './components/Path';

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
        state: 'waiting',
        time: 0,
        errorObject: {},
        object: {},
    };

    componentDidMount = () => {
        const { request, history } = this.props;
        const item = new request();
        item.init();
        this.request = item;

        this.openByHash(history.location.hash);
        history.listen(location => this.openByHash(location.hash));
    };

    @computed
    get hash() {
        const { section, request } = this.props;
        return `${section.id}.${request.name}`;
    }

    @computed
    get pathUrl() {
        let url = this.request.baseUrl ?
            this.request.baseUrl + this.request.url :
            api.baseUrl + this.request.url;

        this.request.path.filter(param => param.value !== null).
            forEach(param => {
                url = url.replace(`:${param.name}`, param.value);
            });
        return url;
    }

    @computed
    get fullUrl() {
        let queryParams = this.request.query.filter(param => param.value !== null)
            .map(param => {
                return `${param.name}=${param.value}`
            });
        queryParams = queryParams.length > 0 ? '?' + queryParams.join('&') : '';

        return this.pathUrl + queryParams;
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
        this.response.state = 'loading';
        this.response.time = Date.now();

        const headers = this.request.transformHeaders(this.parseParameters(this.request.headers));
        const query = this.request.transformQuery(this.parseParameters(this.request.query));
        const body = this.request.transformBody(this.parseParameters(this.request.body));
        if (this.request.handleResponse === null) {
            this.request.handleResponse = this.handleResponse;
        }
        const baseUrl = this.request.baseUrl ? this.request.baseUrl : api.baseUrl;
        const type = this.request.type;

        this.request.execute({
            baseUrl,
            url: this.pathUrl,
            type,
            headers,
            query,
            body,
        })
            .then((response) => {
                this.response.object = response;
                this.response.time = Date.now() - this.response.time;
                this.response.state = 'done';
            })
            .catch((error) => {
                this.response.errorObject = error;
                this.response.state = 'error';
            });
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
                            <i className={this.isOpened ? 'icon icon-arrow-up' : 'icon icon-arrow-down'}/>
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
                        <Path request={this.request}/>
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
