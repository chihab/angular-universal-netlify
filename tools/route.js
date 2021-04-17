/* eslint-disable */

const express = require('express');
const app = express();
const cors = require('cors');
const serverless = require('serverless-http');

const FUNCTIONS_BASE = `../server/functions`;

app.use(cors());
app.use(serverless);

app.use('**/.netlify/functions/:endpoint', async (req, res) => {
  console.log(res);
  const endpoint = require(`${FUNCTIONS_BASE}/${req.params.endpoint}`);
  // const response = await endpoint.handler(req, res);
  // console.log(response);
  res.send('ok');
});

app.listen(8889);
