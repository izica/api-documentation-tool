import {
    Request,
    Parameter,
    PARAMETER_TYPE,
    REQUEST_TYPE,
    REQUEST_FORMAT
} from 'core';

class Detail extends Request {
    init = () => {
        this.setUrl('/projects/get')
            .setTitle('Project by id')
            .setType(REQUEST_TYPE.POST)
            .setFormat(REQUEST_FORMAT.JSON)
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('id')
                    .setModel('Project.id')
                    .setRequired()
            );
    }
}

export default Detail;
