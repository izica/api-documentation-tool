import {
    Request,
    PARAMETER_TYPE,
    REQUEST_TYPE,
    REQUEST_FORMAT,
} from 'core';

class Save extends Request {
    init = () => {
        this.setUrl('/projects/save')
            .setTitle('Project save')
            .setType(REQUEST_TYPE.POST)
            .setFormat(REQUEST_FORMAT.JSON)
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
