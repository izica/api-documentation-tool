class ModelField {
    name = '';
    type = '';
    null = false;
    default = '';

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
