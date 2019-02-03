import { observable } from 'mobx';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import VIEW_TYPE from '../constants/VIEW_TYPE';

class Parameter {
    #isLabelSet = false;
    @observable type = PARAMETER_TYPE.QUERY;
    @observable view = VIEW_TYPE.INPUT;
    @observable name = 'name';
    @observable placeholder = '';
    @observable label = 'field';
    @observable description = '';
    @observable required = false;
    @observable value = false;
    @observable model = false;
    @observable readonly = false;

    /**
     * @returns {Parameter}
     */
    create = () => new Parameter()

    /**
     * @param view
     * @returns {Parameter}
     */
    setView = (view = VIEW_TYPE.INPUT) => {
        this.view = view;
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
    setValue = (value = false) => {
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
}

export default new Parameter();
