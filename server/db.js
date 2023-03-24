const Pool = require("pg").Pool;

const pool = new Pool({
    user: "daniel_h",
    //password: "fadedDiamond4774!",
    host: "localhost",
    database: "pernstack_todolist", 
    port: 5432
});

module.exports = pool;