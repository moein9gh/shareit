const express = require("express")
const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const {getInterfaceIp} = require('./utils/functions')

const app = express()
const PORT = 3000

//Serve static file
app.use(express.static('static'))

// Create a writable stream for the output zip file
const output = fs.createWriteStream(path.join(__dirname,"static","output.zip"));

// Create an instance of the archiver
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

// Pipe the archive data to the output stream
archive.pipe(output);

// Append all files which exist in static folder into output zip file
archive.glob('*', {cwd:path.join(__dirname,"files")});

// Finalize the archive and close the output stream
archive.finalize().then(()=>{
    console.log("files successfully compressed")
    app.listen(PORT,()=>{
        //Get ip address of server
        const ipV4 = getInterfaceIp()
        console.log(`open http://${ipV4}:${PORT}/output.zip and download your files in any device you want`);
    })
    
}).catch(e=>{
    console.log(`ERROR : ${e.message}`)
});

