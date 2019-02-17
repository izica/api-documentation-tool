import { observable } from 'mobx';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import DATA_TYPE from '../constants/DATA_TYPE';

class RequestParameter {
    @observable type = PARAMETER_TYPE.QUERY;
    @observable dataType = DATA_TYPE.STRING;
    @observable dataFormat = '';
    @observable name = 'name';
    @observable placeholder = '';
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
    setDataType = (dataType, dataFormat = '') => {
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
    setDataFormat = (dataFormat) => {
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
    setName = (name) => {
        if (name === undefined) {
            return this;
        }

        this.name = name;
        return this;
    }

    /**
     * @param placeholder
     * @returns {RequestParameter}
     */
    setPlaceholder = (placeholder) => {
        if (placeholder === undefined) {
            return this;
        }

        this.placeholder = placeholder;
        return this;
    }

    /**
     * @param description
     * @returns {RequestParameter}
     */
    setDescription = (description) => {
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
    setRequired = (required) => {
        if (required === undefined) {
            return this;
        }

        if (this.type === PARAMETER_TYPE.PATH) {
            this.required = true;
            return this;
        }

        this.required = required;
        return this;
    }

    /**
     * @param readonly
     * @returns {RequestParameter}
     */
    setReadonly = (readonly) => {
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
    setType = (type) => {
        if (type === undefined) {
            return this;
        }

        if (type === PARAMETER_TYPE.PATH) {
            this.required = true;
        }

        this.type = type;
        return this;
    }

    /**
     * @param value
     * @returns {RequestParameter}
     */
    setValue = (value) => {
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
    setModel = (model) => {
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
