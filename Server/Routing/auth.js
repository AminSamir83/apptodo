const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/todolist', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('todolist');
    closure(db);
  })
}


// Error handling
const sendError = (err, res, code) => {
  response.status = code;
  response.message = typeof err == 'object' ? err.message : err;
  response.data = [];
  res.status(code).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};



// router.post('/register', (req, res) => {
//   connection(db => {
//     db.collection('user').insert(req.body).then(result => {
//       response.message = "OK";
//       var token = jwt.sign(req.body,'token_secret');
//       response.data = token;
//       response.status = 200;
//       res.json(response);
//     }).catch(err => {
//       sendError(err, res, 409);
//     })
//   })
// })

router.post('/register', function (req, res) {
  let qry = {
    "email": req.body.email
  };
  connection(db => {
    db.collection('user').findOne(qry).then(result => {
      console.log(req.body.email);
      if (result) {
        response.status = 401;
        response.message = "account already exists";
      } else {
        db.collection('user').insertOne(req.body)
        response.status = 200;
        response.message = "register succes";
        response.data = jwt.sign(req.body, 'james_bond', { expiresIn: '1h' } );;
      }
      res.json(response)
    }).catch(err => {
      sendError(err, res, 409);
    })
  })
})

// router.post('/login', (req, res) => {
//   connection(db=>{
//     // console.log(req.body);
//     db.collection('user').findOne({email:req.body.email}).
//     then(result=>{
//       if(!result) sendError("User not found",res,401);
//       if(result.password === req.body.password){
//         let token = jwt.sign({id:result._id},'secret',);
//         response.data= {token:token};
//         response.message='ok';
//         response.status = 200;
//         res.json(response);
//       }else{
//         sendError('Mot de passe Invalide',res,401);
//       }
//     }).catch(err=>{
//       sendError(err,res,500);
//     })
//   })
// })

router.post('/login', function (req, res) {
  let qry =  {"email":req.body.email, "password": req.body.password};
  connection(db=>{
      db.collection('user').findOne(qry).then(result=>{
          if (result){
          let token = jwt.sign({_id:result._id},'secret',);
          response.data= {token:token};
          response.message='ok';
          response.status = 200;
          res.json(response);
        } else {
          sendError('Login Invalide',res,401);
        }
      }).catch(err=>{
          sendError(err,res,501);
      })
  })})


module.exports = router;
