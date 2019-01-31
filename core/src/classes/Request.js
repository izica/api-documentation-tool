import REQUEST_TYPE from "../constants/REQUEST_TYPE";
import Parameter from './Parameter';

class Request {
    baseUrl = null;
    url = '/';
    type = REQUEST_TYPE.GET;
    params = [];

    /**
     * @param baseUrl
     * @returns {Request}
     */
    setBaseUrl = (baseUrl = null) => {
        this.baseUrl = baseUrl;
        return this;
    };

    /**
     * @param url
     * @returns {Request}
     */
    setUrl = (url = '/') => {
        this.url = url;
        return this;
    };

    /**
     * @param type
     * @returns {Request}
     */
    setType = (type = REQUEST_TYPE.GET) => {
        this.type = type;
        return this;
    };

    /**
     * @param param
     * @returns {Request}
     */
    addParam = (param = Parameter.create()) => {
        this.params.push(param);
        return this;
    };
};

export default Request;
