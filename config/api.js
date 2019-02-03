import ProjectList from '../api/project/List';
import ProjectDetail from '../api/project/Detail';
import ProjectSave from '../api/project/Save';

const api = {
    baseUrl: 'http://avtodom-phalcon/api/v2',
    title: 'Title',
    description: `
        <div>
            description <b>bold</b>
        </div>
    `,
    sections: [
        {
            id: 'projects',
            title: 'Projects',
            description: `<div>Work with <b>Projects</b></div>`,
            requests: [
                ProjectList,
                ProjectDetail,
                ProjectSave
            ]
        }
    ]
};

export default api;
