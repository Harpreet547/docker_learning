const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(process.env.PORT ?? 8080, () => {
    console.log(`Server listening on port ${process.env.PORT ?? 8080}`);
});
