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

        this.addField({
            name: 'material_id',
            type: 'integer'
        })
    }
}

export default ProjectMaterial;
