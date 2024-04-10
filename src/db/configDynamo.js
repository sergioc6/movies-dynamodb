const AWS = require('aws-sdk');

AWS.config.update({
    region: 'local',
    accessKeyId: "test",
    secretAccessKey: "test",
    endpoint: "localhost:8000",
    sslEnabled: false,
    s3ForcePathStyle: true
});

module.exports = new AWS.DynamoDB();