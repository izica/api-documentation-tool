# Hackable pure JS documenation for your API like Swagger
Build your API reference with pure Javascript
Also you can modify core, which written on ReactJS

![alt screen1](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-1.png)

![alt screen2](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-2.png)

![alt screen3](https://raw.githubusercontent.com/izica/project-doc-js/master/core/git_images/screenshot-3.png)

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

## Build your API documentation
### Manual config
* edit `config/app.js`, set your `appName`, and `buildPath`, you can add all repo to `src` folder and set `buildPath: '../'`
* edit `config/api.js` and set `baseUrl` to your backend URL

### Api requests creating
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


### Model creating(Database table reference for example)
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

### Class reference
TODO
