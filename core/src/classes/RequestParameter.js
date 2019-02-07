import { observable } from 'mobx';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import DATA_TYPE from '../constants/DATA_TYPE';

class RequestParameter {
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
     * @param dataType
     * @param dataFormat
     * @returns {RequestParameter}
     */
    setDataType = (dataType = DATA_TYPE.STRING, dataFormat = '') => {
        this.dataType = dataType;

        if (dataFormat === false) {
            switch (dataType) {
                case DATA_TYPE.DATE:
                    this.dataFormat = 'Y-M-D';
                    break;
                case DATA_TYPE.FILE:
                    this.dataFormat = '*';
                    break;
                default:
            }
        }
        return this;
    }

    /**
     * @param name
     * @returns {RequestParameter}
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
     * @returns {RequestParameter}
     */
    setPlaceholder = (placeholder = '') => {
        this.placeholder = placeholder;
        return this;
    }

    /**
     * @param label
     * @returns {RequestParameter}
     */
    setLabel = (label = 'field') => {
        this._isLabelSet = true;
        this.label = label;
        return this;
    }

    /**
     * @param description
     * @returns {RequestParameter}
     */
    setDescription = (description = '') => {
        this.description = description;
        return this;
    }

    /**
     * @param required
     * @returns {RequestParameter}
     */
    setRequired = (required = true) => {
        this.required = required;
        return this;
    }

    /**
     * @param readonly
     * @returns {RequestParameter}
     */
    setReadonly = (readonly = true) => {
        this.readonly = readonly;
        return this;
    }

    /**
     * @param type
     * @returns {RequestParameter}
     */
    setType = (type = PARAMETER_TYPE.QUERY) => {
        this.type = type;
        return this;
    }

    /**
     * @param value
     * @returns {RequestParameter}
     */
    setValue = (value = null) => {
        this.value = value;
        return this;
    }

    /**
     * @param model
     * @returns {RequestParameter}
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

export default RequestParameter;
