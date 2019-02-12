import { Model } from 'core';

class ProjectMaterial extends Model {
    init = () => {
        this.addField({
            name: 'id'
        });

        this.addField({
            name: 'project_id',
            type: 'Project.id'
        })
    }
}

export default ProjectMaterial;
