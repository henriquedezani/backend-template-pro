const { Pool } = require('pg');

const pool = new Pool({
  user: 'jpleqzesxisuxv',
  password: '97e50c959e3605212a37f6b86b480cf24eed51ab4a11af3a12c7511529c3b933',
  host: 'ec2-52-87-135-240.compute-1.amazonaws.com',
  database: 'd6qso5h33qv0a9',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

pool.query('SELECT * FROM videos', (error, result) => {
  if (error) throw error;
  console.log(result.rows);
})
