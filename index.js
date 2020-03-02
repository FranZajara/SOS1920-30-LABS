const cool = require("cool-ascii-faces");

const express = require("express");

var app = express();

app.get("/time",(request,response) => {
	response.send("<html>"+Date()+"</html>");
});
app.listen(80);


console.log("server ready");
