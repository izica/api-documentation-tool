import REQUEST_TYPE from '../constants/REQUEST_TYPE';
import REQUEST_FORMAT from '../constants/REQUEST_FORMAT';
import PARAMETER_TYPE from '../constants/PARAMETER_TYPE';
import RequestParameter from './RequestParameter';
import api from 'config/api';
import axios from 'axios';
import cookies from 'tough-cookie';
import axiosCookies from 'axios-cookiejar-support';

class Request {
    baseUrl = null;

    url = '/';

    type = REQUEST_TYPE.GET;

    headers = [];
    query = [];
    body = [];
    cookie = [];
    isRaw = false;

    title = 'Request title';

    description = '';

    format = REQUEST_FORMAT.DEFAULT;

    init = () => {
    };

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
            case PARAMETER_TYPE.COOKIE:
                this.cookie.push(param);
                break;
            default:
                this.query.push(param);
                break;
        }
        return this;
    };

    getHeaders = headers => headers;

    getQuery = query => query;

    getBody = body => body;

    getCookie = cookie => cookie;

    countObject = (obj) => {
        return Object.keys(obj).length;
    }

    createCookieString = (cookieObject) => {
        let result = '';
        Object.keys(cookieObject).forEach(key => {
            result += `${key}=${cookieObject[key]};`;
        });
        return result;
    }

    execute = (parameters) => {
        const requestOptions = {
            method: parameters.type,
            url: parameters.url,
            headers: {}
        };
        if (this.countObject(parameters.headers) > 0) {
            requestOptions.headers = parameters.headers;
        }
        if (this.countObject(parameters.query) > 0) {
            requestOptions.params = parameters.query;
        }
        if (this.countObject(parameters.body) > 0) {
            requestOptions.data = parameters.body;
        }
        axios(requestOptions).then(this.handleResponse);
    };

    handleResponse = null;
}

export default Request;
