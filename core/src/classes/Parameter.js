import PARAMETER_TYPE from "../constants/PARAMETER_TYPE";
import VIEW_TYPE from "../constants/VIEW_TYPE";

class Parameter {
    type = PARAMETER_TYPE.QUERY;
    view = VIEW_TYPE.INPUT;
    name = "text";
    placeholder = '';
    label = 'field';
    description = '';
    required = false;

    /**
     * @returns {Parameter}
     */
    create = () => {
        return new Parameter();
    }

    /**
     * @param view
     * @returns {Parameter}
     */
    setView = view => {
        this.view = view;
        return this;
    }

    /**
     * @param name
     * @returns {Parameter}
     */
    setName = name => {
        this.name = name;
        return this;
    }

    /**
     * @param placeholder
     * @returns {Parameter}
     */
    setPlaceholder = placeholder => {
        this.placeholder = placeholder;
        return this;
    }

    /**
     * @param label
     * @returns {Parameter}
     */
    setLabel = label => {
        this.label = label;
        return this;
    }

    /**
     * @param description
     * @returns {Parameter}
     */
    setDescription = description => {
        this.description = description;
        return this;
    }

    /**
     * @param required
     * @returns {Parameter}
     */
    setRequired = required => {
        this.required = required;
        return this;
    }

    /**
     * @param type
     * @returns {Parameter}
     */
    setType = type => {
        this.type = type;
        return this;
    }
};

export default new Parameter();
