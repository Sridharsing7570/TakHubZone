const development = {
  name: "development",
  db: process.env.MONGO_URL_DEV,
  port: process.env.PORT_DEV,
  smtp: {
    service: "gmail", // The email service provider
    host: "smtp.gmail.com", // The SMTP server host
    port: 587, // The port number for SMTP communication
    auth: {
      user: process.env.MAILER_ID_DEV, // Sender's email address
      pass: process.env.MAILER_PASS_DEV, // Sender's email password or app password
    },
  },
  mailFrom: process.env.MAIL_FROM_DEV,
  clientURL: process.env.CLIENT_URL_DEV,
  serverURL: process.env.SERVER_URL_DEV,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
};

const production = {
  name: "production",
  port: process.env.PORT_PROD,
  db: process.env.MONGO_URL_PROD,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAILER_ID_PROD,
      pass: process.env.MAILER_PASS_PROD,
    },
  },
  mailFrom: process.env.MAIL_FROM_PROD,
  clientURL: process.env.CLIENT_URL_PROD,
  serverURL: process.env.SERVER_URL_PROD,
  google_client_id: process.env.GOOGLE_CLIENT_ID_PROD,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET_PROD,
};

module.exports =
  process.env.NODE_ENV === "development" ? development : production;
