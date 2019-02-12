import { computed } from "mobx";
import ModelField from "./ModelField";

class Model {
    fields = [];

    init = () => {
    };

    addField = (field = {}) => {
        this.fields.push(new ModelField(field));
        return this;
    }

    @computed
    get fieldsByName() {
        const result = {};
        this.fields.forEach(field => {
            result[field.name] = field;
        });
        return result;
    }
}

export default Model;
