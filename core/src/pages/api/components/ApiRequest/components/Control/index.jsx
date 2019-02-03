import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

import './styles.scss';
import Input from "./components/Input";
import { DATA_TYPE, PARAMETER_TYPE } from "core";

@observer
class Control extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get control() {
        const { parameter } = this.props;
        if (parameter.dataType === DATA_TYPE.FILE && parameter.type !== PARAMETER_TYPE.BODY) {
            return 'Error: Data type "File" only can append to body';
        }

        if (parameter.options.length > 0) {
            return 'Select';
        }
        if (parameter.dataType === DATA_TYPE.DATE) {
            return 'Datepicker';
        }
        if (parameter.dataType === DATA_TYPE.BOOLEAN) {
            return 'Checkbox';
        }
        return <Input parameter={parameter}/>
    }

    @computed
    get label() {
        const { parameter } = this.props;
        if (parameter.required) {
            return (
                <b>
                    {parameter.label}
                    <span>*</span>
                </b>
            );
        }

        return parameter.label;
    }

    render = () => {
        const { parameter } = this.props;
        return (
            <tr className="control">
                <td>{this.label}</td>
                <td>{this.control}</td>
                <td>{parameter.description}</td>
                <td>{parameter.dataType}</td>
            </tr>
        )
    }
}

export default Control;
