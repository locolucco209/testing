let sacBee = require("fs")

sacBee.readFile('./sacBEE.csv', 'utf8', (error, data) => {
    if (error) throw "NOPE"
    console.log(data)
})