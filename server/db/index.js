const { Pool } = require("pg");
const pg = require("pg")
// pg.defaults.ssl= true ; 
// const {Pool} = pg ;

const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};
