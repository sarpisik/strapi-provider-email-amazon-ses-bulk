"use strict";
const client = require("./ses");

module.exports = {
    init: (_, settings = {}) => {
        return {
            send: (options) => {
                const {
                    from: Source,
                    to: ToAddresses,
                    cc: CcAddresses,
                    // bcc,
                    replyTo: ReplyToAddresses,
                    subject,
                    text,
                    html,
                    ...rest
                } = options;

                let msg = {
                    Destination: { CcAddresses, ToAddresses },
                    Source: Source || settings.defaultFrom,
                    Message: {
                        Body: {
                            /* required */
                            Html: {
                                Charset: "UTF-8",
                                Data: html,
                            },
                            Text: {
                                Charset: "UTF-8",
                                Data: text,
                            },
                        },
                        Subject: {
                            Charset: "UTF-8",
                            Data: subject,
                        },
                    },
                    // bcc,
                    ReplyToAddresses: ReplyToAddresses || [
                        settings.defaultReplyTo,
                    ],
                    ...rest,
                };

                return client.sendEmail(msg);
            },
        };
    },
};
