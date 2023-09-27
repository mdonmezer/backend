const express = require('express');
const app = express();
const port = 3000; // Sunucunuz için bir port seçin

const bodyParser = require('body-parser');
app.use(bodyParser.json());



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
