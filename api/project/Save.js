import {
    Request,
    Parameter,
    PARAMETER_TYPE,
    REQUEST_TYPE,
    REQUEST_FORMAT,
    DATA_TYPE
} from 'core';

class Save extends Request {
    init = () => {
        this.setUrl('/projects/save')
            .setTitle('Project save')
            .setType(REQUEST_TYPE.POST)
            .setFormat(REQUEST_FORMAT.JSON)
            .setDescription(`<div>Some description YAYAYA</div>`)
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.HEADER)
                    .setPlaceholder('Bearer Token')
                    .setDescription('token from /user/login')
                    .setName('Authorization')
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.QUERY)
                    .setDataType(DATA_TYPE.NUMBER)
                    .setName('id')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.QUERY)
                    .setDataType(DATA_TYPE.NUMBER)
                    .setName('id2')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setDataType(DATA_TYPE.NUMBER)
                    .setName('id')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('email')
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setDataType(DATA_TYPE.FILE)
                    .setName('photo')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setDataType(DATA_TYPE.DATE)
                    .setName('date')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setDataType(DATA_TYPE.BOOLEAN)
                    .setName('enabled')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('color')
                    .setOptions(['#fff', '#ddd', 'red'])
                    .setRequired()
            )
    }
}

export default Save;
