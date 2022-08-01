const express = require("express");
const https = require("https");
const app = express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
     res.sendFile(__dirname+"/index.html");   
    });
    
    // res.send("Server is up and running");
app.post("/", function(req,res){
    const query = req.body.cityName;
    const apiKey = "ec57c4fdfc82d3f2d9730d53982274e1";
    const units = "metric"
    https.get("https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
           const weatherData = JSON.parse(data)
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const des = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(temp);
            console.log(des);
            console.log(icon);

           res.write("<p> The weather description is "+des+" </p>");
            res.write("<h1>The temperature in "+query+" is "+temp+" degree Celsius</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
});
});
});
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});




