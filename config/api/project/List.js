import {
    Request,
    REQUEST_TYPE,
    PARAMETER_TYPE
} from 'core';

class  List extends Request {
    init = () => {
        this.setUrl('/project')
            .setTitle('All projects')
            .setType(REQUEST_TYPE.GET)
            .setDescription('get project list');

        this.addParameter({
            type: PARAMETER_TYPE.COOKIE,
            name: 'AUTH',
        });
    }
}

export default List;
