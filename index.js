const express = require('express')
const app = express()
const port = 3000
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'reader',
    host: 'localhost',
    database: 'librarydb',
    password: 'reader',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})