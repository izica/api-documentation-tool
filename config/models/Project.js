import { Model } from 'core';

class Project extends Model {
    init = () => {
        this.addField({
            name: 'id'
        });

        this.addField({
            name: 'name'
        })
    }
}

export default Project;
