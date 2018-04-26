let fs = require("fs")

fs.appendFile('./append_to_me.txt', 'We need coffee', 'utf8', (error) => {
    console.log(error)
})