let fs = require("fs")

fs.writeFile('./write_out.txt', 'Burritos are amazing', 'utf8', (error) => {
    if (error) {
        console.log(error)
        throw "NOPE"
    }
})