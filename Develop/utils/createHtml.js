const fs = require('fs');
const path = require('path');

// Function to write to HTML file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./dist/html/', fileName), data);
}

function createHtml(data){
    return `<!DOCTYPE html>
    <html lang="en-US">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Create Your Own HTML!</title>
            <!-- <link rel="stylesheet" href="./assets/css/reset.css"> -->
            <link rel="stylesheet" href="./assets/css/style.css">
        </head>
        <body>
            <h1>Hello! My name is ${data.name}</h1>
            <p>I am from ${data.location}</p>
            <p>My favorite hobby is ${data.hobby}</p>
            <p><b>GitHub:</b> <a href='https://github.com/${data.github} target='_blank'>${data.github}</a></p>
            <p><b>LinkedIn:</b> <a href='https://linkedin.com/in/${data.linkedIn}' target = '_blank'>${data.linkedIn}</a></p>
        </body>
    </html>`;
}

module.exports = { createHtml, writeToFile };