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

import Badge from './components/Badge';
import Body from "./components/Body";
import Query from "./components/Query";
import Headers from "./components/Headers";

import api from 'config/api'

import './styles.scss';
import Template from "../../../../components/Template";

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

    componentDidMount = () => {
        const {request, history} = this.props;
        const item = new request();
        item.init();
        this.request = item;

        this.openByHash(window.location.hash);
        history.listen(location => this.openByHash(location.hash));
    };

    @computed
    get hash() {
        const {section, request} = this.props;
        return `${section.id}.${request.name}`;
    }

    @computed
    get fullUrl() {
        let url = this.request.baseUrl ?
            this.request.baseUrl + this.request.url :
            api.baseUrl + this.request.url;
        let params = this.request.query.map(param => `${param.name}=${param.value}`);
        params = params.length > 0 ? '?' + params.join('&') : '';
        return url + params;
    }

    openByHash = (hash) => {
        if (this.isOpened === false) {
            this.isOpened = '#' + this.hash === hash;
        }
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
                    <form onSubmit={e => e.preventDefault()}>
                        <Headers request={this.request}/>
                        <Query request={this.request}/>
                        <Body request={this.request}/>
                        <div className="api-request__block">
                            <button type="submit" className="btn">Send request</button>
                        </div>
                    </form>
                </Template>
            </div>
        )
    }
}

export default ApiRequest;
