import {
    Request,
    PARAMETER_TYPE,
    REQUEST_TYPE,
} from 'core';

class Save extends Request {
    init = () => {
        this.setUrl('/projects/save')
            .setTitle('Project save')
            .setType(REQUEST_TYPE.POST)
            .setDescription(`<div>Some description YAYAYA</div>`);

        this.addParameter({
            type: PARAMETER_TYPE.HEADER,
            name: 'Authorization',
            description: 'token from /user/login',
            placeholder: 'Bearer Token'
        });
    }
}

export default Save;
