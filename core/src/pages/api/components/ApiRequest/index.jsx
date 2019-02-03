import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import { Request } from 'core';
import renderHTML from 'react-render-html';

import Badge from './components/Badge';
import Body from "./components/Body";
import Query from "./components/Query";
import Headers from "./components/Headers";

import api from 'config/api'

import './styles.scss';
import Template from "../../../../components/Template";

@observer
class ApiRequest extends React.Component {
    static propTypes = {
        section: PropTypes.object,
        request: PropTypes.func,
    };

    @observable request = new Request();

    componentDidMount = () => {
        const { request } = this.props;
        const item = new request();
        item.init();
        this.request = item;
    };

    @computed
    get fullUrl() {
        let url = this.request.baseUrl ?
            this.request.baseUrl + this.request.url :
            api.baseUrl + this.request.url;
        let params = this.request.query.map(param => `${param.name}=${param.value}`);
        params = params.length > 0 ? '?' + params.join('&') : '';
        return url + params;
    }

    render = () => {
        const { section, request } = this.props;

        return (
            <div className="panel api-request" id={`${section.id}.${request.name}`}>
                <div className="panel-header api-request__header">
                    <div className="d-flex">
                        <Badge type={this.request.type}/>
                        <h5 className="api-request__title">
                            {this.request.title}
                        </h5>
                    </div>
                </div>
                <div className="api-request__url">
                    <h6>{this.fullUrl}</h6>
                    <Template visible={this.request.description !== ''}>
                        {renderHTML(this.request.description)}
                    </Template>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <Headers request={this.request}/>
                    <Query request={this.request}/>
                    <Body request={this.request}/>
                    <div className="api-request__block">
                        <button type="submit" className="btn">Send request</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ApiRequest;
