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
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta:wght@700&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    
    <body>
        <div class="intro">
            <h1>Hi! I'm ${data.name}</h1>
            <p>I am from ${data.location}</p>
            <p>My favorite hobby is ${data.hobby}</p>
            <div class="link-box">
                <a href="https://github.com/${data.github}" target="_blank"><button>View Profile</button></a>
                <div class="icon-box">
                    <a href="https://github.com/${data.github}" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="https://linkedin.com/in/${data.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="mailto:"><i class="bi bi-envelope-fill" target="_blank"></i></a>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
}

module.exports = { createHtml, writeToFile };