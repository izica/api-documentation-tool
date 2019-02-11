import ModelField from "./ModelField";

class Model {
    fields = [];

    init = () => {};

    addField = (field = {}) => {
        this.fields.push(new ModelField(field));
    }
}

export default Model;
