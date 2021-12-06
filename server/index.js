const express = require('express');
const app = express();
const PORT = 35729;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});