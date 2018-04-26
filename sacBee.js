let fs = require("fs")

fs.readFile('./Sacramentorealestatetransactions.csv', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
    data.trim().split(",").forEach((d) => console.log(d))
})