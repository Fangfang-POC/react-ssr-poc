import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from '../components/App.tsx';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const page = <StaticRouter location={req.url}><App /></StaticRouter>;
  const content = renderToString(page);
  console.log(content);
  res.send(`
      <html>
        <head>
         <meta charset="utf-8">
         <title>react ssr poc</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `)
})

app.listen(9001, () => {
  console.log('server started at port 9001.');
})