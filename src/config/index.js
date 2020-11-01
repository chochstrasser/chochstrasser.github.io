const config = {
  development: {
    DOMAIN: 'dev-chochstrasser.us.auth0.com',
    CLIENT_ID: '2GYooVME1cqD7H3PjRn1kLrldoNE5h1R',
  },
  production: {
    DOMAIN: 'dev-chochstrasser.us.auth0.com',
    CLIENT_ID: 'IeaSXLrL56vMcr2G1uiRx00z8NPPZPn7',
  },
};

const environment = process.env.NODE_ENV;

export default config[environment];
