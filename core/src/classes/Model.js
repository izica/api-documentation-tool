import ModelField from "./ModelField";

class Model {
    fields = [];

    init = () => {};

    addField = (field = {}) => {
        this.fields.push(new ModelField(field));
        return this;
    }
}

export default Model;
