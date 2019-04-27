var express = require("express"),
    app = express();

app.get("/", function(req, res){
    res.send("working");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");
});