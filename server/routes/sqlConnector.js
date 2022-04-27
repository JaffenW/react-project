var mysql = require('mysql')

const defaultConfig = {
  host: '172.172.4.200',
  port: '3306',
  user: 'hsa_rw_app',
  password: 'sinobest',
  database: 'hibiz_exp_db'
}

function createConnection(config) {
  return mysql.createConnection(config || defaultConfig)
}

module.exports = {
  createConnection
}