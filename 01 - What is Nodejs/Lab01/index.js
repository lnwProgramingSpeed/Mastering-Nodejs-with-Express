const fs = require('fs');

// import React from 'react';

console.log(global);
console.log(__dirname);
console.log(__filename);

module.exports = 5

console.log(module);
console.log(exports);// {}
console.log(module.exports);// 5
console.log(exports === module.exports);// false

const filePath = 'data.js';
// non blocking
// have big data files, the app can run while data is being downloaded
fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log(data);
    }   
});

//blocking
// Faster shorter but make sure have contain amount of data when data is downloaded
fs.readFileSync(filePath, 'utf8', console.log(data));
console.log('============================================================')