import React from 'react';
import PropTypes from 'prop-types';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { NavHashLink as Link } from 'react-router-hash-link';
import * as models from 'config/models';

@observer
class ModelViewField extends React.Component {
    static propTypes = {
        field: PropTypes.object,
        modelName: PropTypes.string
    };

    @computed
    get type() {
        const {field} = this.props;
        const typeArray = field.type.split('.');
        if (typeArray.length > 1) {
            const modelName = typeArray[0];
            const fieldName = typeArray[1];

            if (models[modelName]) {
                const model = new models[modelName]();
                model.init();
                if (model.fieldsByName[fieldName]) {
                    return (
                        <Link to={`/models#${field.type}`}>
                            {model.fieldsByName[fieldName].type} ({field.type})
                        </Link>
                    );
                } else {
                    return `Field "${field.type}" not found`;
                }
            } else {
                return `Model "${modelName}" not found`;
            }
        }
        return field.type;
    }

    render = () => {
        const {field, modelName} = this.props;
        const id = `${modelName}.${field.name}`;

        return (
            <tr id={id}>
                <td>{field.name}</td>
                <td>{this.type}</td>
                <td>{field.null ? 'no' : 'yes'}</td>
                <td>{field.default}</td>
                <td>{field.description}</td>
            </tr>

        )
    }
}

export default ModelViewField;
