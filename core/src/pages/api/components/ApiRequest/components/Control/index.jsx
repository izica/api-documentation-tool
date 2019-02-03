import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

import './styles.scss';
import Input from "./components/Input";

@observer
class Control extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

    @computed
    get control() {
        const { parameter } = this.props;

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
