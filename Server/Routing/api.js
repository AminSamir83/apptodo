const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


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
    res.status(code).json(response);
  };

  // Response handling
  let response = {
    status: 200,
    data: [],
    message: null
  };

  router.get('/todos/:id',(req,res)=>{
    let qry = {_id:ObjectID(req.params.id)};
    connection(db=>{
        db.collection('user').findOne(qry).then(result=>{
            response.data = result.todos;
            response.message= "OK";
            res.json(response);
        }).catch(err=>{
            sendError(err,res,501);
        })
    })
})

router.post('/todos/:id',(req,res)=>{
  let qry = {_id:ObjectID(req.params.id)};
  connection(db=>{
      db.collection('user').update(qry,{$push:{todos:req.body}}).then(result=>{
          response.data = result;
          response.message= "OK";
          res.json(response);
      }).catch(err=>{
          sendError(err,res,501);
      })
  })
})



  //get one todo by id

  router.get('/todos/:id/:index',(req,res)=>{
    connection (db =>{
    db.collection('user').findOne({_id:ObjectID(req.params.id)},(err,result)=>{
            res.send(result.todos[req.params.index]);
        })
    })
})


// update todo by id
/* router.put('/todos/:id/:index', function (req, res) {
    let qry = {
        _id: ObjectID(req.params.id)
    };
    connection(db => {
        db.collection('user').findOne(qry).then(result => {
            result.todos[req.params.index] = req.body
            db.collection('user').updateOne(qry, {
                $set: {
                    todos: result.todos
                }
            })
            res.send('todo modified  '+ result.todos[req.params.index])
        }).catch(err => {
            sendError(err, res, 501);
        })
    })
})
*/


// delete todo by id
/*
router.delete('/todos/:id/:index', function (req, res) {
    let qry = {
        _id: ObjectID(req.params.id)
    };
    connection(db => {
        db.collection('user').findOne(qry).then(result => {
            result.todos.splice(req.params.index, 1)
            db.collection('user').updateOne(qry, {
                $set: {
                    todos: result.todos
                }
            })
            res.send('todo deleted  ' + result.todos)
        }).catch(err => {
            sendError(err, res, 501);
        })
    })
})
*/

/* new apis corrected

// update todo
router.put('/todos/:userID/:index', function (req, res) {
    let qry = {
        _id: ObjectID(req.params.userID)
    };
    connection(db => {
        db.collection('user').updateOne(qry,{$set:{["todos." + req.params.index]:req.body}}).then(result =>
            res.send('todo updated')
        )
    })
})
*/
//update todo
router.put('/todos/:id/:index', function (req, res) {
    let qry = {
        _id: ObjectID(req.params.id)
    };
    console.log(req.body)
    connection(db => {
        db.collection('user').updateOne(qry,{$set:{["todos." + req.params.index]:req.body}}).then(result =>
            res.send('todo updated')
        )
    })
})
/* delete todo
router.delete('/todos/:userID/:index', function (req, res) {
    let qry = {
        _id: ObjectID(req.params.userID)
    };
    connection(db => {
        db.collection('user').updateOne(qry, {$unset:{["todos." + req.params.index]:""}}).then(result => {
            res.send('todo deleted')
        }).catch(err => {
            sendError(err, res, 501);
        })
    })
})

*/


module.exports = router;
