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
                    .setName('Token')
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
                    .setName('name')
                    .setRequired()
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('email')
            )
    }
}

export default Save;
