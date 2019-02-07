import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import { DATA_TYPE, PARAMETER_TYPE } from "core";

import Input from "./components/Input";
import Datepicker from "./components/Datepicker";
import Select from "./components/Select";

import './styles.scss';
import Checkbox from "./components/Checkbox";
import Filepicker from "./components/Filepicker";

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
            return <Select parameter={parameter}/>;
        }

        if (parameter.dataType === DATA_TYPE.FILE) {
            return <Filepicker parameter={parameter}/>;
        }

        if (parameter.dataType === DATA_TYPE.DATE) {
            return <Datepicker parameter={parameter}/>;
        }

        if (parameter.dataType === DATA_TYPE.BOOLEAN) {
            return <Checkbox parameter={parameter}/>;
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
