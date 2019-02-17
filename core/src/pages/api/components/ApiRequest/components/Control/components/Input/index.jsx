import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import { DATA_TYPE } from 'core';

@observer
class Input extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get type() {
        const { parameter } = this.props;
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
        const { parameter } = this.props;
        if (!parameter.value) {
            return '';
        }
        return parameter.value;
    }

    handleChange = (e) => {
        const { parameter } = this.props;
        if (e.target.value === '') {
            parameter.value = null;
        } else {
            parameter.value = e.target.value
        }
    }

    render = () => {
        const { parameter } = this.props;
        return (
            <input
                className="form-input"
                name={parameter.name}
                type={this.type}
                placeholder={parameter.placeholder}
                value={this.value}
                onChange={this.handleChange}
                required={parameter.required}
                readOnly={parameter.readonly}
            />
        )
    }
}

export default Input;
