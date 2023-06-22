const { Pool } = require('pg');

const PG_URI = 'postgres://uqtgrrgu:64-MaoITQDF5_YfI24-5WPUjSZx9w2TF@drona.db.elephantsql.com/uqtgrrgu';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  pool: pool
};
