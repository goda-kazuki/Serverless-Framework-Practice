'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: process.env.SAMPLE_NAME,
        input: event,
      },
      null,
      2
    ),
  };
};
