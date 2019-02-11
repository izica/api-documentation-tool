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

    constructor(properties = {}) {
        this.setType(properties.type)
            .setDataType(properties.dataType)
            .setDataFormat(properties.dataType)
            .setName(properties.name)
            .setPlaceholder(properties.placeholder)
            .setLabel(properties.label)
            .setDescription(properties.description)
            .setRequired(properties.required)
            .setModel(properties.model)
            .setReadonly(properties.readonly)
            .setValue(properties.value)
            .setOptions(properties.options);
    }

    /**
     * @param dataType
     * @param dataFormat
     * @returns {RequestParameter}
     */
    setDataType = (dataType = DATA_TYPE.STRING, dataFormat = '') => {
        if (dataType === undefined) {
            return this;
        }

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
     * @param dataFormat
     * @returns {RequestParameter}
     */
    setDataFormat = (dataFormat = '') => {
        if (dataFormat === undefined) {
            return this;
        }

        this.dataFormat = dataFormat;
        return this;
    }

    /**
     * @param name
     * @returns {RequestParameter}
     */
    setName = (name = 'name') => {
        if (name === undefined) {
            return this;
        }

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
        if (placeholder === undefined) {
            return this;
        }

        this.placeholder = placeholder;
        return this;
    }

    /**
     * @param label
     * @returns {RequestParameter}
     */
    setLabel = (label = 'field') => {
        if (label === undefined) {
            return this;
        }

        this._isLabelSet = true;
        this.label = label;
        return this;
    }

    /**
     * @param description
     * @returns {RequestParameter}
     */
    setDescription = (description = '') => {
        if (description === undefined) {
            return this;
        }

        this.description = description;
        return this;
    }

    /**
     * @param required
     * @returns {RequestParameter}
     */
    setRequired = (required = true) => {
        if (required === undefined) {
            return this;
        }

        this.required = required;
        return this;
    }

    /**
     * @param readonly
     * @returns {RequestParameter}
     */
    setReadonly = (readonly = true) => {
        if (readonly === undefined) {
            return this;
        }

        this.readonly = readonly;
        return this;
    }

    /**
     * @param type
     * @returns {RequestParameter}
     */
    setType = (type = PARAMETER_TYPE.QUERY) => {
        if (type === undefined) {
            return this;
        }

        this.type = type;
        return this;
    }

    /**
     * @param value
     * @returns {RequestParameter}
     */
    setValue = (value = null) => {
        if (value === undefined) {
            return this;
        }

        this.value = value;
        return this;
    }

    /**
     * @param model
     * @returns {RequestParameter}
     */
    setModel = (model = false) => {
        if (model === undefined) {
            return this;
        }

        this.model = model;
        return this;
    }

    /**
     * @param options
     * @returns {RequestParameter}
     */
    setOptions = (options) => {
        if (options === undefined) {
            return this;
        }

        this.options = options;
        return this;
    }
}

export default RequestParameter;
