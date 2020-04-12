module.exports = function (app) {
	console.log("Regidtering sugarconsume API...");
	// const cool = require("cool-ascii-faces");
	const dataStore = require("nedb");
	const path = require("path");
	 
	const dbFileName = path.join(__dirname, "sugarconsume.db");
	const BASE_API_URL = "/api/v1";
	 
	const db = new dataStore({
					filename: dbFileName,
					autoload: true
});
	 
	
	
	var sugarconsume = [
	{
		place: "Europe",
		sugarconsume: 18800,
		year:  2017
		
	},
	{
		place: "China",
		sugarconsume: 17500,
		year:  2017
		
	},
	{
		place: "India",
		sugarconsume: 28000,
		year:  2017
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2017
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1580,
		year: 2017
		
	},
		{
		place: "Europe",
		sugarconsume: 18800,
		year:  2016
		
	},
	{
		place: "China",
		sugarconsume: 17700,
		year:  2016
		
	},
	{
		place: "India",
		sugarconsume: 28000,
		year:  2016
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2016
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1580,
		year: 2016
		
	},{
		place: "Europe",
		sugarconsume: 18700,
		year:  2015
		
	},
	{
		place: "China",
		sugarconsume: 17558,
		year:  2015
		
	},
	{
		place: "India",
		sugarconsume: 27195,
		year:  2015
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2015
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1587,
		year: 2015
		
	}
		
];
	 
	 
	const base = [
		{
		place: "Europe",
		sugarconsume: 18800,
		year:  2017
		
	},
	{
		place: "China",
		sugarconsume: 17500,
		year:  2017
		
	},
	{
		place: "India",
		sugarconsume: 28000,
		year:  2017
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2017
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1580,
		year: 2017
		
	},
		{
		place: "Europe",
		sugarconsume: 18800,
		year:  2016
		
	},
	{
		place: "China",
		sugarconsume: 17700,
		year:  2016
		
	},
	{
		place: "India",
		sugarconsume: 28000,
		year:  2016
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2016
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1580,
		year: 2016
		
	},{
		place: "Europe",
		sugarconsume: 18700,
		year:  2015
		
	},
	{
		place: "China",
		sugarconsume: 17558,
		year:  2015
		
	},
	{
		place: "India",
		sugarconsume: 27195,
		year:  2015
		
	},
	{
		place: "Turkey",
		sugarconsume: 2300,
		year:  2015
		
	},
	{
		place: "Ukraine",
		sugarconsume: 1587,
		year: 2015
		
	}
];

	 
	 
	 
	 //LOADINITIALDATA
	 
	 
app.get(BASE_API_URL+"/sugarconsume/loadInitialData",(req,res) => {
	console.log("New GET .../loadInitialData");
	db.insert(sugarconsume);
	res.sendStatus(200);
	console.log("Initial sugarconsume loaded" + JSON.stringify(sugarconsume,null,2));
});
	 
	 //GET SUGARCONSUME/XXX
	 
app.get(BASE_API_URL+"/sugarconsume/:place",(req,res) => {
	var place = req.params.place;
	var filteredSugarConsume = sugarconsume.filter((c) =>{
		return (c.place == place);
	});
	if(filteredSugarConsume.length >= 1){
		res.send(filteredSugarConsume[0]);
	}else{
		res.sendStatus(404, "CONTACT NOT FOUND");
	}
		
});
	 
	 //GET SUGARCONSUME

app.get(BASE_API_URL+"/sugarconsume",(req,res) => {
	console.log("New GET .../sugarconsume");
	db.find({}, (err, sugarconsume) => {
			sugarconsume.forEach((c) => {
				delete c._id;
			});
			res.send(JSON.stringify(sugarconsume, null, 2));
			console.log("Data sent:"+JSON.stringify(sugarconsume,null,2));
	});

});
	
	//POST SUGARCONSUME

app.post(BASE_API_URL+"/sugarconsume",(req,res) => {
	var newSugarConsume = req.body;
	if((newSugarConsume == "") || (newSugarConsume.place == null)){
			res.sendStatus(400, "BAD REQUEST(no name provided)");
	}
	else{
		sugarconsume.push(newSugarConsume);
		res.sendStatus(201, "CREATED");
	}
});

	 
	 
	 //POST SUGARCONSUME/XXX

app.post(BASE_API_URL+"/sugarconsume/:place",(req,res) => {
	
		res.sendStatus(405, "METHOD NOT ALLOWED");
	});

	 
	 
	 //PUT SUGARCONSUME/XXX
	
app.put(BASE_API_URL+"/sugarconsume/:place",(req,res) => {
	var place = req.params.place
	var body = req.body;
	var filteredSugarConsume = sugarconsume.filter((c) => {
		return (c.place != place);
	});
	
	if(place = req.body.place){
		sugarconsume = filteredSugarConsume;
		sugarconsume.push(req.body);
		res.sendStatus(200, "OK");
	}else{
		res.sendStatus(404, "NOT FOUND");
	}
	
}
	
);
	

	
	//PUT SUGARCONSUME
app.put(BASE_API_URL+"/sugarconsume",(req,res) => {
	res.sendStatus(405, "METHOD NOT ALLOWED");
});
	
	//DELETE SUGARCONSUME/XXX

app.delete(BASE_API_URL+"/sugarconsume/:place",(req,res) => {
	var place = req.params.place;
	var filteredSugarConsume = sugarconsume.filter((c) =>{
		return (c.place != place);
	});
	if(filteredSugarConsume.length < sugarconsume.length){
		sugarconsume = filteredSugarConsume;
		res.sendStatus(200, "OK");
		
	}else{
		res.sendStatus(404, "SUGARCONSUME PLACE NOT FOUND");
	}
});
	
	
	//DELETE SUGARCONSUME
	app.delete(BASE_API_URL+"/sugarconsume",(req,res) => {
		if(sugarconsume.length == 0){
			res.sendStatus(404, "SUGARCONSUME NOT FOUND");
			
		}else{
			sugarconsume = "";
			res.sendStatus(200,"OK")
		}
	});
	
	
	
	
	
	
	//DELETE SUGARCONSUME/XXX/YYYY
		app.delete(BASE_API_URL+"/sugarconsume/:place/:year", (req,res)=>{

		var place = req.params.place;
		var year = parseInt(req.params.year);

		db.find({"place":place, "year":year},(error, sugarconsume)=>{			 
			if(sugarconsume.length == 0){
				console.log("Error 404, no se ha encontrado el recurso");
				res.sendStatus(404);
			}else{
				console.log("borrando un solo recurso");
                res.sendStatus(200);
				db.remove({ "place":place, "year":year });
			}
		})
	});
	
	 
	 
	 console.log("OK");
}
