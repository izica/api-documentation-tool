import ProjectsList from '../api/projects/List';
import ProjectsDetail from '../api/projects/Detail';

const api = {
    baseUrl: 'http://avtodom-phalcon/api/v2',
    auth: {
        username: 'username',
        password: 'password'
    },
    headers: {
        Authorization: 'Bearer ADSDADSADS1'
    },
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
                ProjectsList,
                ProjectsDetail
            ]
        }
    ]
};

export default api;
