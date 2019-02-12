import React from 'react';
import PropTypes from 'prop-types';
import { observable } from "mobx";
import { observer } from "mobx-react";

import './styles.scss';

@observer
class ModelView extends React.Component {
    static propTypes = {
        model: PropTypes.func
    };

    @observable model = null;

    componentDidMount = () => {
        const {model} = this.props;
        this.model = new model();
        this.model.init();
    };

    render = () => {
        if (this.model === null) {
            return null;
        }
        console.log(this.model);

        return (
            <div className="panel model-view" id={this.model.constructor.name}>
                <div className="panel-header model-view__header">
                    {this.model.constructor.name}
                </div>
                <div className="model-view__content">
                    <table className="table">
                        <thead>
                        <tr>
                            <th width="15%">Field</th>
                            <th width="15%">Type</th>
                            <th width="15%">Required</th>
                            <th width="15%">Default value</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.model.fields.map(field => {
                            return (
                                <tr key={`${this.model.constructor.name}.${field.name}`}>
                                    <td>{field.name}</td>
                                    <td>{field.type}</td>
                                    <td>{field.null ? 'no' : 'yes'}</td>
                                    <td>{field.default}</td>
                                    <td>{field.description}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ModelView;
