const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
