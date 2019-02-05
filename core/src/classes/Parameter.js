import { observable } from 'mobx';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import DATA_TYPE from '../constants/DATA_TYPE';

class Parameter {
    @observable _isLabelSet = false;

    @observable type = PARAMETER_TYPE.QUERY;
    @observable dataType = DATA_TYPE.STRING;
    @observable dataFormat = '';
    @observable name = 'name';
    @observable placeholder = '';
    @observable label = 'field';
    @observable description = '';
    @observable required = false;
    @observable model = false;
    @observable readonly = false;
    @observable value = null;
    @observable options = [];

    /**
     * @returns {Parameter}
     */
    create = () => new Parameter();

    /**
     * @param dataType
     * @param dataFormat
     * @returns {Parameter}
     */
    setDataType = (dataType = DATA_TYPE.STRING, dataFormat = '') => {
        this.dataType = dataType;
        this.dataFormat = dataFormat;

        return this;
    }

    /**
     * @param name
     * @returns {Parameter}
     */
    setName = (name = 'name') => {
        if (this._isLabelSet === false) {
            this.label = name.charAt(0).toUpperCase() + name.slice(1);
        }
        this.name = name;
        return this;
    }

    /**
     * @param placeholder
     * @returns {Parameter}
     */
    setPlaceholder = (placeholder = '') => {
        this.placeholder = placeholder;
        return this;
    }

    /**
     * @param label
     * @returns {Parameter}
     */
    setLabel = (label = 'field') => {
        this._isLabelSet = true;
        this.label = label;
        return this;
    }

    /**
     * @param description
     * @returns {Parameter}
     */
    setDescription = (description = '') => {
        this.description = description;
        return this;
    }

    /**
     * @param required
     * @returns {Parameter}
     */
    setRequired = (required = true) => {
        this.required = required;
        return this;
    }

    /**
     * @param readonly
     * @returns {Parameter}
     */
    setReadonly = (readonly = true) => {
        this.readonly = readonly;
        return this;
    }

    /**
     * @param type
     * @returns {Parameter}
     */
    setType = (type = PARAMETER_TYPE.QUERY) => {
        this.type = type;
        return this;
    }

    /**
     * @param value
     * @returns {Parameter}
     */
    setValue = (value = null) => {
        this.value = value;
        return this;
    }

    /**
     * @param model
     * @returns {Parameter}
     */
    setModel = (model = false) => {
        this.model = model;
        return this;
    }

    setOptions = (options) => {
        if (Array.isArray(options)) {
            options.forEach(option => {
                this.options.push({
                    id: option,
                    value: option
                });
            });
        } else {
            Object.keys(options).forEach(key => {
                this.options.push({
                    id: key,
                    value: options[key]
                });
            });
        }
        return this;
    }
}

export default new Parameter();
