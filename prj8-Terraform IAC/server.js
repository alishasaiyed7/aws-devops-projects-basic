const app = require('./app');
const port = 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
