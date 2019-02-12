import { observable } from 'mobx';

class ModelField {
    @observable name = 'field';
    @observable type = 'string';
    @observable null = false;
    @observable default = '';
    @observable description = '';

    /**
     * @param properties
     */
    constructor(properties = {}) {
        Object.keys(properties).forEach(property => {
            if (typeof properties[property] !== 'function') {
                this[property] = properties[property];
            }
        });
    }

    /**
     * @param value
     */
    setName = (value = '') => {
        this.name = value;
    }

    /**
     * @param value
     */
    setType = (value = '') => {
        this.type = value;
    }

    /**
     * @param value
     */
    setNull = (value = false) => {
        this.null = value;
    }

    /**
     * @param value
     */
    setDefault = (value = '') => {
        this.default = value;
    }

    /**
     * @param value
     */
    setDescription = (value = '') => {
        this.description = value;
    }
}

export default ModelField;
