const app = require('./app.js');
const config = require('../config');
const port = config.PORT;

app.listen(config.PORT, () => {
  console.log(`app is running on http://localhost:${config.PORT}`);
});
