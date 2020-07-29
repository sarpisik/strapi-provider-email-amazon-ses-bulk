# `strapi-provider-email-amazon-ses-bulk`

> Email provider for bulk messages such as newsletters.

## Reguirements
Following env variables are required in order to use:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_SES_REGION

## Configuration

```javascript
module.exports = ({ env }) => ({
    email: {
        provider: "amazon-ses-bulk",
        settings: {
            defaultFrom: env("DEFAULT_FROM", "hello@example.com"),
            defaultReplyTo: env("REPLY_TO", "hello@example.com"),
        },
    },
});
```

## Usage

```javascript
await strapi.plugins["email"].services.email
    // "options" for sendBulkTemplatedEmail()
    .send(options)
    .then(console.log)
    .catch(console.error);
```
Options details can found at [here](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendBulkTemplatedEmail-property).
