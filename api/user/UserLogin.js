import {
    Request,
    Parameter,
    PARAMETER_TYPE,
    REQUEST_TYPE
} from 'core';


class UserLogin extends Request {
    init = () => {
        this.setUrl('/user/login')
            .setTitle('Login')
            .setType(REQUEST_TYPE.POST)
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('login')
                    .setDescription('use phone as login')
                    .setValue('8913543123')
                    .setModel('User.login')
            )
            .addParam(
                Parameter.create()
                    .setType(PARAMETER_TYPE.BODY)
                    .setName('password')
                    .setModel('User.password')
            );
    }
}

export default UserLogin;
