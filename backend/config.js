const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  SECRET_KEY: process.env.SECRET_KEY || "Tausif2123",
  //   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  //   accessKeyId: process.env.accessKeyId || 'accessKeyId',
  //   secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
