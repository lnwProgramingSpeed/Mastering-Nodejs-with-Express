const os = require('os');
const fs = require('fs');

console.log('Hello Node.js');

// Logging global objects
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// Blocking vs Non-blocking IO
const content = fs.readFileSync('./data.js', 'utf8');
console.log(content);

fs.readFile('./data.js', 'utf8', (err, content) => {
  console.log(content);
});

const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('Request Object:', req);
  console.log('Response Object:', res);
  
  const cpuInfo = os.cpus();
  const homeDir = os.homedir();
  const uptimeInSeconds = os.uptime();

  // tracking uesage state proforments
  res.write(`CPU Info: ${JSON.stringify(cpuInfo)}\n`);
  res.write(`Home Directory: ${homeDir}\n`);
  res.write(`Server Uptime (seconds): ${uptimeInSeconds}\n`);

  res.writeHead(200);// send statement to server
  res.write('Hello world')
  res.end();

}).listen(3000)

console.log('Server listening on port 3000');
