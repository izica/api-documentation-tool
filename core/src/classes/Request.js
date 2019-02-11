import REQUEST_TYPE from '../constants/REQUEST_TYPE';
import REQUEST_FORMAT from '../constants/REQUEST_FORMAT';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import RequestParameter from './RequestParameter';
// import api from 'config/api';
// import axios from 'axios';

class Request {
    baseUrl = null;

    url = '/';

    type = REQUEST_TYPE.GET;

    headers = [];
    query = [];
    body = [];
    isRaw = false;

    title = 'Request title';

    description = '';

    format = REQUEST_FORMAT.DEFAULT;

    init = () => {}

    /**
     * @param format
     * @returns {Request}
     */
    setFormat = (format = REQUEST_FORMAT.DEFAULT) => {
        this.format = format;
        return this;
    };

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
     * @param title
     * @return {Request}
     */
    setTitle = (title = 'Request title') => {
        this.title = title;
        return this;
    };

    /**
     * @param description
     * @return {Request}
     */
    setDescription = (description = '') => {
        this.description = description;
        return this;
    };

    /**
     * @param parameter
     * @returns {Request}
     */
    addParameter = (parameter = {}) => {
        const param = new RequestParameter(parameter);

        switch (param.type) {
            case PARAMETER_TYPE.RAW:
                this.isRaw = true;
                this.body = [param];
                break;
            case PARAMETER_TYPE.BODY:
                if (this.isRaw === false) {
                    this.body.push(param);
                }
                break;
            case PARAMETER_TYPE.HEADER:
                this.headers.push(param);
                break;
            case PARAMETER_TYPE.QUERY:
                this.query.push(param);
                break;
            default:
                break;
        }
        return this;
    };

    getHeaders = headers => headers;

    getQuery = query => query;

    getBody = body => body;
    //
    // beforeExecute = () => {
    //     let headers = this.getHeaders();
    //     const query = this.getQuery();
    //     const getBody
    // }
    //
    // execute = (type = REQUEST_TYPE.GET, headers = [], query = [], body = []) => {
    //
    //     const baseUrl = this.baseUrl ? this.baseUrl : api.baseUrl;
    //     console.log(baseUrl);
    // }
    //
    // handleResponse = (status = 'success', response) => {
    //
    // }
}

export default Request;
