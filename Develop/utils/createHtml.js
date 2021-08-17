const fs = require('fs');
const path = require('path');

// Function to write to HTML file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./dist/html/', fileName), data);
}

function createHtml(data){
    return 'Success!';
}

module.exports = { createHtml, writeToFile };