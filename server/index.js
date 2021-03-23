const app = require('./app.js');
const config = require('../config');
const port = 3000;

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
