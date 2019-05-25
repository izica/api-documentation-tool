# Hackable JS documenation for your API
Build your API reference with pure Javascript
Also you can modify core, which written on ReactJS

![alt screen1](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-4.png)

![alt screen2](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-5.png)

![alt screen3](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-6.png)

## Installation and Usage
```
npm install
```

#### Dev
```
npm start
```

#### Build

```
npm run build
```

# Build your API documentation
## Manual config
* edit `config/app.js`, set your `appName`, and `buildPath`, you can add all repo to `src` folder and set `buildPath: '../'`
* edit `config/api.js` and set `baseUrl` to your backend URL

## Api requests creating
* create request in `config/api/`
* `import` request to `config/api.js`
* In `config/api.js` add reqiest to `sections` for adding request to api page
```javascript
request.js
import {
    Request,
    REQUEST_TYPE,
    PARAMETER_TYPE
} from 'core';

class  SendSms extends Request {
    init = () => {
        this.setUrl('/customer/send-sms')
            .setTitle('Send sms')
            .setType(REQUEST_TYPE.POST);

        this.addParameter({
            type: PARAMETER_TYPE.BODY,
            name: 'phone',
            placeholder: '+79131001010'
        });
    }
}

export default SendSms;
```
```javascript
//api.js
import WelcomeScreenList from './api/welcome_screen/List';
import CustomerSendSms from './api/customer/SendSms';

const api = {
    title: 'YOUR API',
    description: `
        <div>
            API reference
        </div>
    `,
    baseUrl: 'http://api-backend.local',
    sections: [
        {
            id: 'customer',
            title: 'Customer',
            description: ``,
            requests: [
                CustomerSendSms
            ]
        }
    ]
};

export default api;
```

### PARAMETER_TYPE.PATH
PARAMETER_TYPE.PATH add parameter value to request URL

```javascript
class DeviceCodeSend extends Request {
    init = () => {
        this.setUrl('/customer-device-code/send/:phone')
            .setTitle('Send sms')
            .setType(REQUEST_TYPE.POST);

        this.addParameter({
            type: PARAMETER_TYPE.PATH,
            name: 'phone',
            placeholder: '+79131001010'
        });
    }
}
```
also you can do that
```javascript
this.setUrl('/catalog/:category_id/:product_id/get')
```
![alt screen3](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/parameter_path.png)


## Model creating(Database table reference for example)
* Create `config/models/<YourModelName>.js`
* `import` your model to `config/models.js`
    
```javascript
import { Model } from 'core';

class User extends Model {
    init = () => {
        this.addField({
            name: 'id',
            type: 'integer'
        });

        this.addField({
            name: 'name'
        })

        this.addField({
            name: 'phone',
            description: '+79131001010'
        });
    }
}

export default Customer;
```
```javascript
//add field to model
addField({
    name, //string
    type, //string; by default = 'string'
    null, //bool, field is required or not; by default = false
    default, //string
    description, //string
})
```

### You can use linked field type
```
import { Model } from 'core';

class Product extends Model {
    init = () => {
        this.addField({
            name: 'id',
            type: 'integer'
        });

        this.addField({
            name: 'name'
        });

        this.addField({
            name: 'price',
            type: 'integer'
        });

        this.addField({
            name: 'product_category_id',
            type: 'ProductCategory.id'
        });
    }
```
![alt screen3](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/field_type_linked.png)

# Class docs
## core partials
* Model
* ModelField
* Request
* RequestParameter
* PARAMETER_TYPE
* REQUEST_TYPE
* DATA_TYPE

```javascript
import {
    Request,
    REQUEST_TYPE,
    PARAMETER_TYPE
} from 'core';
```

## Model
* addField(object || ModelField) - object has same structure as ModelField class

## ModelField
* name: String = 'field'
* type: String = 'string'
* null: Boolean = false - field is required or not
* default: String = '' - default value
* description: String = ''
* setName(value)
* setType(value)
* setNull(value)
* setDefault(value)
* setDescription(value)

## Request
* init()
* setBaseUrl(baseUrl) - set new base api url for current endpoint
* setUrl(url) - set url for api request, you can use templating with PARAMETER_TYPE.PATH, '/:product_category_code/product/:id'
* setType(REQUEST_TYPE) - one of type REQUEST_TYPE
* setTitle(title)
* setDescription(description) - additional description for endpoint
* addParameter(object || RequestParameter) - object has same structure as RequestParameter class
* transformHeaders(headers) => headers - you can override this function for mutate headers before request execute
* transformQuery(query) => query
* transformBody(body) => body

## RequestParameter
* type: PARAMETER_TYPE
* dataType: DATA_TYPE
* dataFormat: String - need for DATA_TYPE.DATE, depends on momentjs, example: 'Y-m-d'
* name: String
* placeholder: String
* description: String
* required: Boolean
* readonly: Boolean
* value: Any - default value, depends on control type
* options: Array - if length > 0, form control type will be Select, example: ['red', 'yellow', 'green']
* setType(PARAMETER_TYPE)
* setDataType(DATA_TYPE)
* setName(name)
* setPlaceholder(placeholder)
* setDescription(description)
* setRequired(required)
* setReadonly(readonly)
* setValue(defaultValue)
* setOptions(options)

## REQUEST_TYPE
* GET: 'get'
* POST: 'post'
* PUT: 'put'
* DELETE: 'delete'

## DATA_TYPE
* STRING: 'string' - Input, if options.length > 0 -> Select
* NUMBER: 'number' - Input type=number
* DATE: 'date' - Datepicker(react-datepicker + momentjs)
* BOOLEAN: 'boolean' - Checkbox
* FILE: 'file' - Input type=file

## PARAMETER_TYPE
* HEADER: 'header'
* BODY: 'body' - for POST parameters
* QUERY: 'query' - for GET parameters
* PATH: 'path' - you can use it for URL templating, for example '/:product_category_code/product/:id'



