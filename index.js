var app = require("./app");
var config = require("./config.json")
app.listen(process.env.PORT || config.port ,function()
{
    console.log("running");
})