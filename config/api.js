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
    section: {
        title: 'User',
        description: {
            type: 'html',
            value: `<div>description user</div>`
        },
        items: []
    }
}

export default config;
