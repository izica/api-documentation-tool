import {
    Request,
    RequestParameter,
    PARAMETER_TYPE,
    REQUEST_TYPE,
    REQUEST_FORMAT
} from 'core';

class Detail extends Request {
    init = () => {
        this.setUrl('/projects/get')
            .setTitle('Project by id')
            .setType(REQUEST_TYPE.POST)
            .setFormat(REQUEST_FORMAT.JSON);

        const id = new RequestParameter();
            id.setType(PARAMETER_TYPE.BODY)
            .setName('id')
            .setModel('Project.id')
            .setRequired();

        this.addParameter(id);

    }
}

export default Detail;
