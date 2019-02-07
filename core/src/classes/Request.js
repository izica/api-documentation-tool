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
     * @param options
     * @return {RequestParameter}
     */
    createParameter = (options = {}) => {
        const parameter = new RequestParameter();

        if (options.type !== undefined) {
            parameter.setType(options.type);
        }
        if (options.dataType !== undefined) {
            if(options.dataFormat !== undefined){
                parameter.setDataType(options.dataType, options.dataFormat);
            }else{
                parameter.setDataType(options.dataType);
            }
        }
        if (options.dataType !== undefined) {
            parameter.setDataType(options.dataType);
        }
        if (options.name !== undefined) {
            parameter.setName(options.name);
        }
        if (options.placeholder !== undefined) {
            parameter.setPlaceholder(options.placeholder);
        }
        if (options.label !== undefined) {
            parameter.setLabel(options.label);
        }
        if (options.description !== undefined) {
            parameter.setDescription(options.label);
        }
        if (options.required !== undefined) {
            parameter.setRequired(options.required);
        }
        if (options.model !== undefined) {
            parameter.setModel(options.model);
        }
        if (options.readonly !== undefined) {
            parameter.setReadonly(options.readonly);
        }
        if (options.value !== undefined) {
            parameter.setValue(options.value);
        }
        if (options.options !== undefined) {
            parameter.setOptions(options.options);
        }
        return parameter;
    }

    /**
     * @param param
     * @returns {Request}
     */
    addParameter = (param = new RequestParameter()) => {
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
