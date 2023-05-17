const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath, (error, data) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(`Error: ${error}`);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`This is the list of our students\n${data}`);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
