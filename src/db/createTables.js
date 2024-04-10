const DynamoDB = require('./configDynamo');

DynamoDB.createTable({
    TableName: 'Movies',
    KeySchema: [
        { AttributeName: 'year', KeyType: 'HASH' },
        { AttributeName: 'title', KeyType: 'RANGE'}
    ],
    AttributeDefinitions: [
        { AttributeName: 'year', AttributeType: 'N'},
        { AttributeName: 'title', AttributeType: 'S'}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
}, (err, data) => {
    if (err) {
        console.error('No se pudo crear la tabla. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        console.log('Tabla creada correctamente. Descripción JSON:', JSON.stringify(data, null, 2));
    }
});

