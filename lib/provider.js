"use strict";
const client = require("./ses");

module.exports = {
  init: (_, settings = {}) => {
    return {
      // send: (options) => {
      //   const {
      //     from,
      //     to,
      //     cc,
      //     // bcc,
      //     replyTo,
      //     subject,
      //     text,
      //     html,
      //     ...rest
      //   } = options;

      //   let msg = {
      //     Destination: {
      //       CcAddresses: Array.isArray(cc) ? cc : [cc],
      //       ToAddresses: Array.isArray(to) ? to : [to],
      //     },
      //     Source: from || settings.defaultFrom,
      //     Message: {
      //       Body: {
      //         /* required */
      //         Html: {
      //           Charset: "UTF-8",
      //           Data: html,
      //         },
      //         Text: {
      //           Charset: "UTF-8",
      //           Data: text,
      //         },
      //       },
      //       Subject: {
      //         Charset: "UTF-8",
      //         Data: subject,
      //       },
      //     },
      //     // bcc,
      //     ReplyToAddresses: replyTo
      //       ? Array.isArray(replyTo)
      //         ? replyTo
      //         : [replyTo]
      //       : [settings.defaultReplyTo],
      //     ...rest,
      //   };

      //   // TODO: transform options
      //   delete msg.options;

      //   return client.sendEmail(msg);
      // },
      send: (data) => {
        if (!Object.prototype.hasOwnProperty.call(data, "Source")) {
          data.Source = settings.defaultFrom;
        }

        if (!Object.prototype.hasOwnProperty.call(data, "ReplyToAddresses")) {
          data.ReplyToAddresses = [settings.defaultReplyTo];
        }

        return client.sendBulkTemplatedEmail(data);
      },
    };
  },
};
