import { observable } from 'mobx';

class ModelField {
    @observable name = '';
    @observable type = '';
    @observable null = false;
    @observable default = '';

    constructor(properties = {}) {
        Object.keys(properties).forEach(property => {
            if (typeof properties[property] !== 'function') {
                this[property] = properties[property];
            }
        });
    }

    setName = (value = '') => {
        this.name = value;
    }

    setType = (value = '') => {
        this.type = value;
    }

    setNull = (value = false) => {
        this.null = value;
    }

    setDefault = (value = '') => {
        this.default = value;
    }
}

export default ModelField;
