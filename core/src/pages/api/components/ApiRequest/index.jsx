import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Request } from 'core';

import Badge from './components/Badge';

import './styles.scss';
import Body from "./components/Body";

@observer
class ApiRequest extends React.Component {
    static propTypes = {
        request: PropTypes.func
    };

    @observable request = new Request();

    componentDidMount = () => {
        const { request } = this.props;
        const item = new request();
        item.init();
        this.request = item;
    };

    render = () => {
        console.log(this.request);
        return (
            <div className="panel api-request">
                <div className="panel-header api-request__header">
                    <div className="d-flex">
                        <Badge type={this.request.type}/>
                        <h5 className="api-request__title">
                            {this.request.title}
                        </h5>
                    </div>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="divider" data-content="Headers"/>
                    <div className="divider" data-content="Query"/>
                    <Body request={this.request}/>
                    <div className="api-request__block">
                        <button type="submit" className="btn btn-primary">Send request</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ApiRequest;
