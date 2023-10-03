const express = require('express');
const app = express();
const port = 3000; // Sunucunuz için bir port seçin

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var fs = require('fs');

fs.readFile('merhaba.txt', 'utf-8', function (err, data) {

  if (err){ throw err;
  }

  console.log(data.toString());

});

// fs.writeFile("dosya.txt","muhammet dönmezer", function(err){
//   if (err) {
//     throw err;
//   }
//   console.log("Yazıldı");
// })

// fs.appendFile("dosya.txt","muhammet dönmezer", function(err){
//   if (err) {
//     throw err;
//   }
//   console.log("Eklendi");
// })

fs.unlink("dosya.txt", function(err) {
  if (err) {
    throw err;
  }
  console.log("Silindi");
})



let todos = [];

// Tüm to-do öğelerini almak için bir endpoint
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Bir to-do öğesi eklemek için bir endpoint
app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.send('To-do başarıyla eklendi');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});