import { observable } from 'mobx';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import DATA_TYPE from '../constants/DATA_TYPE';

class Parameter {
    #isLabelSet = false;
    @observable type = PARAMETER_TYPE.QUERY;
    @observable dataType = DATA_TYPE.STRING;
    @observable name = 'name';
    @observable placeholder = '';
    @observable label = 'field';
    @observable description = '';
    @observable required = false;
    @observable value = '';
    @observable model = false;
    @observable readonly = false;
    @observable options = [];

    /**
     * @returns {Parameter}
     */
    create = () => new Parameter();

    /**
     * @param dataType
     * @returns {Parameter}
     */
    setDataType = (dataType = DATA_TYPE.STRING) => {
        this.dataType = dataType;
        return this;
    }

    /**
     * @param name
     * @returns {Parameter}
     */
    setName = (name = 'name') => {
        if (this.#isLabelSet === false) {
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
        this.#isLabelSet = true;
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
    setValue = (value = '') => {
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
