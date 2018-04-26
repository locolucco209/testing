let fs = require("fs")

fs.readFile('./read_in.js', 'utf8', (error, data) => {
    if (error) throw "NOPE"
    console.log(data)
})