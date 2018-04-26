let fs = require("fs")

fs.writeFile('./write_out.txt','utf8', (error) => {
  if (error) {
    console.log(error)
    throw "NOPE"
  }
})
