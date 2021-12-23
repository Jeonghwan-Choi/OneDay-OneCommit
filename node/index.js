const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:chlwjdghks12@cluster0.jslnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false -- 몽구스 버전이 6.0이상이면 항상지원
  
}).then(() => console.log('MongoDB Connection'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})