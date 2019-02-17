import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed, isObservableArray } from 'mobx';
import { DATA_TYPE } from 'core';

@observer
class Select extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get type() {
        const {parameter} = this.props;
        if (parameter.dataType === DATA_TYPE.NUMBER) {
            return 'number';
        }
        if (parameter.dataType === DATA_TYPE.FILE) {
            return 'file';
        }
        return 'text';
    }

    @computed
    get value() {
        const {parameter} = this.props;
        if (parameter.value === null) {
            return '';
        }
        return parameter.value;
    }

    @computed
    get options() {
        const {parameter} = this.props;

        if (isObservableArray(parameter.options)) {
            return parameter.options.map(option => ({
                id: option,
                value: option
            }));
        } else {
            return Object.keys(parameter.options).map(key => ({
                id: key,
                value: parameter.options[key]
            }));
        }
    }

    handleChange = (e) => {
        const {parameter} = this.props;
        if (e.target.value === '') {
            parameter.value = null;
        } else {
            parameter.value = e.target.value
        }
        console.log(parameter.value);
    }

    render = () => {
        const {parameter} = this.props;
        return (
            <select
                className="form-input"
                name={parameter.name}
                value={this.value}
                onChange={this.handleChange}
                required={parameter.required}
            >
                <option value="">choose option</option>
                {this.options.map(option => {
                    return (
                        <option key={`Select${option.id}`} value={option.id}>{option.value}</option>
                    )
                })}
            </select>
        )
    }
}

export default Select;
