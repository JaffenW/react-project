var express = require('express');
var router = express.Router();
var sqlObj =  require('./sqlConnector')
let User = require('../models/User')

const lzhConfig = {
  host: '172.172.1.208',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'mall'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1111' });
});

router.get('/queryInfo', (req,res) => {
  const conn = sqlObj.createConnection()
  const sql = 'select * from fixmedins_ext_attr_info_d limit 10'
  conn.query(sql, (err,result) => {
    if (err) {
      res.json({
        code: 500,
        msg: '数据库查询错误',
      })
    } else {
      res.json({
        code: 200,
        msg: '查询成功',
        data: result
      })
      conn.destroy()
    }
  })
})

router.get('/lzhInfo', (req,res) => {
  const conn = sqlObj.createConnection(lzhConfig)
  const sql = 'select * from cms_subject limit 10'
  conn.query(sql, (err,result) => {
    if (err) {
      res.json({
        code: 500,
        msg: '数据库查询错误',
        result: err
      })
    } else {
      res.json({
        code: 200,
        msg: '查询成功',
        data: result
      })
      conn.destroy()
    }
  })
})

router.get('/testMongodb', (req,res) => {

  User.find({
    userName: 'admin',
    password: '123456'
  }, (err, docs) => {
    console.log('查询成功', docs)
    res.json(docs)
  })
})

module.exports = router;
