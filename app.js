const express = require('express');
const getCurrentDateTime = require('./dateTimeModule');

const app = express();
const port = 3500;

app.get('/', (req, res) => {
  const currentDateTime = getCurrentDateTime();
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Current Date and Time</title>
    </head>
    <body>
    <h1>Current Date and Time</h1>
    <p>${currentDateTime}</p>
  </body>
  </html>
`;
    res.send(html);
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});