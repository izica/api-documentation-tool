import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import './styles/datepicker.scss';

@observer
class Datepicker extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get value() {
        const { parameter } = this.props;
        if (!parameter.value) {
            return null;
        }
        return moment(parameter.value);
    }

    handleChange = (value) => {
        const { parameter } = this.props;

        if (value === null) {
            parameter.value = null;
        } else {
            parameter.value = value.format(parameter.dataFormat);
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
                dateFormat={parameter.dataFormat}
                isClearable
            />
        )
    }
}

export default Datepicker;
