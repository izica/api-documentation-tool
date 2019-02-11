import ModelField from "./ModelField";

class Model {
    fields = [];

    addField = (field = new ModelField()) => {
        console.log(field);
        this.fields.push(field);
    }
}

export default Model;
