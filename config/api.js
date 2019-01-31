import UserLogin from '../api/user/UserLogin';

const api = {
    baseUrl: '',
    auth: {
        username: 'username',
        password: 'password'
    },
    headers: {
        Authorization: 'Bearer ADSDADSADS'
    },
    title: 'Title',
    description: {
        type: 'html',
        value: `<div>description</div>`
    },
    sections: [
        {
            url: 'auth',
            title: 'Auth',
            description: `<div>description user</div>`,
            requests: [
                UserLogin
            ]
        }
    ]
}

export default api;
