const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());


// Endpointler burada tanımlanır.

app.listen(3000, () => {
  console.log('Uygulama 3000 portunda çalışıyor');
});
app.use(index.html());