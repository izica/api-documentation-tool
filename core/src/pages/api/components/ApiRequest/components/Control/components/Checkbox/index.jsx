import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import { DATA_TYPE } from "core";

@observer
class Checkbox extends React.Component {
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
        if (parameter.value === null) {
            return '';
        }
        return +parameter.value;
    }

    handleChange = (e) => {
        const { parameter } = this.props;
        if(e.target.value === ''){
            parameter.value = null;
        }else{
            parameter.value = 1 === +e.target.value
        }
    }

    render = () => {
        const { parameter } = this.props;
        return (
            <select
                className="form-input"
                name={parameter.name}
                value={this.value}
                onChange={this.handleChange}
                required={parameter.required}
            >
                <option value="">choose option</option>
                <option value="0">false</option>
                <option value="1">true</option>
            </select>
        )
    }
}

export default Checkbox;
