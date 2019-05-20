# Hackable pure JS documenation for your API like Swagger
Build your API reference with pure Javascript
Also you can modify core, which written on ReactJS

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

## Building your API documentation
### Model creating(Database table reference for example)
* Create config/models/<YourModelName>.js
```
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
```
//add field to model
addField({
    name, //string
    type, //string; by default = 'string'
    null, //bool, field is required or not; by default = false
    default, //string
    description, //string
})
```
