import {
    Request,
    REQUEST_TYPE
} from 'core';

class  List extends Request {
    init = () => {
        this.setUrl('/projects')
            .setTitle('All projects')
            .setType(REQUEST_TYPE.GET)
            .setDescription('get project list');
    }
}

export default List;
