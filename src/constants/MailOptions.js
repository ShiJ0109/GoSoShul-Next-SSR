const Options = {
  user: 'noreply@localhost.com', // username for logging into smtp
  password: '1q1q!Q!Q', // password for logging into smtp
  host: '127.0.0.1', // smtp host (defaults to 'localhost')
  port: '25', // smtp port (defaults to 25 for unencrypted, 465 for `ssl`, and 587 for `tls`)
  // ssl, // boolean or object (if true or object, ssl connection will be made)
  // tls, // boolean or object (if true or object, starttls will be initiated)
  // timeout, // max number of milliseconds to wait for smtp responses (defaults to 5000)
  // domain, // domain to greet smtp with (defaults to os.hostname)
  // authentication, // array of preferred authentication methods ('PLAIN', 'LOGIN', 'CRAM-MD5', 'XOAUTH2')
  // logger, // override the built-in logger (useful for e.g. Azure Function Apps, where console.log doesn't work)
};
export default Options;
