import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import moment from 'moment';
import DatePicker from "react-datepicker";

import { DATA_TYPE } from "core";

import "./styles.scss";

@observer
class Datepicker extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get value() {
        const { parameter } = this.props;
        if(!parameter.value){
            return null;
        }
        return parameter.value;
    }

    handleChange = (value) => {
        const { parameter } = this.props;
        console.log(value);
        if(!value){
            parameter.value = '';
        }else{
            parameter.value = value;
        }
    }

    render = () => {
        const { parameter } = this.props;
        return (
            <DatePicker
                className="form-input"
                name={parameter.name}
                placeholder={parameter.placeholder}
                selected={this.value}
                onChange={this.handleChange}
                required={parameter.required}
                readOnly={parameter.readonly}
                dateFormat="Y-M-D"
                isClearable
            />
        )
    }
}

export default Datepicker;
