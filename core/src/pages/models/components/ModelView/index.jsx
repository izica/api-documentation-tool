import React from 'react';
import PropTypes from 'prop-types';
import { observable } from "mobx";
import { observer } from "mobx-react";
import { NavHashLink as Link } from "react-router-hash-link";
import * as models from "config/models";

import './styles.scss';
import ModelViewField from "./components/ModelViewField";

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

    getFieldType = (type) => {
        const typeArray = type.split('.');
        if (typeArray.length > 1) {
            const modelName = typeArray[0];
            const fieldName = typeArray[1];

            if (models[modelName]) {
                const model = new models[modelName]();
                model.init();
                if (model.fieldsByName[fieldName]) {
                    return (
                        <Link to={`/models#${type}`}>{model.fieldsByName[fieldName].type} ({type})</Link>
                    );
                } else {
                    return `Field "${type}" not found`;
                }
            } else {
                return `Model "${modelName}" not found`;
            }
        }
        return type;
    };

    render = () => {
        if (this.model === null) {
            return null;
        }
        const modelName = this.model.constructor.name;

        return (
            <div className="panel model-view" id={modelName}>
                <div className="panel-header model-view__header">
                    {modelName}
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
                        {this.model.fields.map(field => <ModelViewField key={`${modelName}.${field.name}`} field={field} modelName={modelName}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ModelView;
