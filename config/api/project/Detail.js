import {
    Request,
    RequestParameter,
    PARAMETER_TYPE,
    REQUEST_TYPE,
} from 'core';

class Detail extends Request {
    init = () => {
        this.setUrl('/projects/:id/get')
            .setTitle('Project by id')
            .setType(REQUEST_TYPE.POST);

        const id = new RequestParameter();
        id.setType(PARAMETER_TYPE.BODY)
            .setOptions(['#fff', '#fsdf'])
            .setName('id')
            .setRequired();

        this.addParameter(id);

        const queryId = new RequestParameter();
        queryId.setType(PARAMETER_TYPE.PATH)
            .setName('id')
            .setRequired();

        this.addParameter(queryId);
    }
}

export default Detail;
