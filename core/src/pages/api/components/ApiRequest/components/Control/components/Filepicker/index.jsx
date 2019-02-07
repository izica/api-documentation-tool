import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

@observer
class Filepicker extends React.Component {
    static propTypes = {
        parameter: PropTypes.object
    };

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
        console.log(e.target.value);

        if(e.target.value === ''){
            parameter.value = null;
        }else{
            // eslint-disable-next-line
            parameter.value = e.target.files[0];
        }
    }


    render = () => {
        const { parameter } = this.props;
        return (
            <input
                className="form-input"
                name={parameter.name}
                type="file"
                onChange={this.handleChange}
                required={parameter.required}
            />
        )
    }
}

export default Filepicker;
