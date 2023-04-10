const express = require("express")
const app = express()
const port = 3000
const os = require('os');

app.get("/", (req, res) => {
    console.log(`${req.method} ${req.path} from ${req.ip}`)
    res.send(`${os.hostname()}`)
})

app.listen(port,
    () => console.log(`Server start at 0.0.0.0:${port}`
    ))