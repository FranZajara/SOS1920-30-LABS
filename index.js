console.log("hello");
const express = require("express");
var app = express();
app.get("/cool",(request, response) => {
	response.send("<html>"+cool()+"</html>");
		});
app.listen(80);

