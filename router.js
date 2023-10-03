import express from "express"
const router = express.Router()

router.post("create",async(req,res)=> {
    res.send("create");
})

'use strict';

const fs = require('fs');

fs.writeFile('dosya.txt', 'Merhaba Node.js', function (err, data) {

  if (err) throw err;

  console.log('Veri başarıyla yazıldı.');

});



export default router
