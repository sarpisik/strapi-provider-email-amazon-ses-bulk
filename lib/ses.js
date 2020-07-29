// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: process.env.AWS_SES_REGION });
// Set the client
const client = new AWS.SES({ apiVersion: "2010-12-01" });

module.exports = {
  sendEmail(params) {
    return client.sendEmail(params).promise();
  },
  sendTemplatedEmail(params) {
    return client.sendTemplatedEmail(params).promise();
  },
  sendBulkTemplatedEmail(params) {
    return client.sendBulkTemplatedEmail(params).promise();
  },
};
