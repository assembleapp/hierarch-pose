const express = require('express')
const bodyParser = require("body-parser")
const escape = require("escape-html")
const responder = express.Router()

const { go, lens } = require("./parse")

responder.use(bodyParser.json())

// https://enable-cors.org/server_expressjs.html
responder.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

responder.get("/sources", (call, response) => {
    response.send("/app/javascript/packs/splash.js")
})

responder.post("/go", (call, response) => {
    go()
    response.send("gone.")
})

responder.post("/lens", (call, response) => {
    lens()
    response.send("done.")
})

responder.post("/change", (call, response) => {
    go({
        upgrade: escape(call.body.upgrade),
        source: call.body.source,
        code: call.body.code,
    })
    response.send(JSON.stringify(call.body))
})

module.exports = responder