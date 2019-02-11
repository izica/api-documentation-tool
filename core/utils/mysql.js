var mysql      = require('mysql');
var connection = mysql.createConnection({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'avtodom'
});

connection.connect();

const getTableName = (object) => {
    return object[Object.keys(object)[0]];
}

const getModelName = (name) => {
    let namePartials = name.split('_');
    namePartials = namePartials.map(partial => (partial.charAt(0).toUpperCase() + partial.slice(1)));
    return namePartials.join('');
}

const getTableFields = (tableName) => {
    let fields = [];

    connection.query(`DESCRIBE ${tableName}`, (error, results) => {
        if (error) {
            throw error;
        }
        fields = results;
    });

    return {
        model: getModelName(tableName),
        fields
    };
}

const createModels = (models) => {
    console.log(models);
    models.forEach(model => {
        console.log(model.fields[0].Field);
        process.exit();
    });
}

connection.query('SHOW TABLES', function (error, results) {
    if (error) {
        throw error;
    }
    const tablesNames = results.map(getTableName);
    const models = [];
    tablesNames.forEach((tableName, index) => {
        connection.query(`DESCRIBE ${tableName}`, (error, results) => {
            if (error) {
                throw error;
            }
            models.push({
                model: getModelName(tableName),
                fields: results
            });
            if(tablesNames.length - 1 === index){
                connection.end();
                createModels(models);
            }
        });
    });
});

