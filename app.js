const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});