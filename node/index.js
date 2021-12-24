const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());


const {User} = require("./models/User");

mongoose.connect('mongodb+srv://admin:chlwjdghks12@cluster0.jslnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false -- 몽구스 버전이 6.0이상이면 항상지원
  
}).then(() => console.log('MongoDB Connection'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) =>{

  //회원가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  
  const user = new User(req.body)
  
  user.save((err,userInfo) => {
    if(err) return res.json({ success : false, err})
    return res.status(200).json({
      success:true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})