import {
    Request,
    Parameter,
    PARAMETER_TYPE,
    VIEW_TYPE,
    REQUEST_TYPE
} from 'core';

console.log(Request);

class UserLogin extends Request {
    beforeExecute = () => {
        this.setUrl('/user/login')
            .setType(REQUEST_TYPE.POST)
            .addParam(
                Parameter.create()
            )
    }
}

export default UserLogin;
