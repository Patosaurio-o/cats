const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

const gatos = [
    { 
        id: "cat1", 
        img: "gato1.jpg", 
        edad: 10, 
        comidaFav: "todo lo que sea vegano", 
        lugaresDondeDuerme: ["bajo de un camion", "en el techo"] 
    },
    { 
        id:"cat2", 
        img: "gato2.jpg", 
        edad: 5, 
        comidaFav: "carne", 
        lugaresDondeDuerme: ["en una cama","en la chimenea", "en una caja"] 
    },
    { 
        id: "cat3", 
        img: "gato3.jpg", 
        edad: 1, 
        comidaFav: "tocino", 
        lugaresDondeDuerme: ["en la casa de un perro", "bajo otro camion"] 
    }
]

app.get("/gatos", (req,res)=>{
  res.render("gatos", { gatos : gatos });

});

app.get("/details", (req,res)=>{
  res.render("details", { gatos : gatos });
});

app.get("/details/:id", (req,res)=>{
  const id = req.params.id;
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>gato:  </title>
        <link rel="stylesheet" href="public/css/styles.css">
    </head>
    <body>   
        <h1>asdasd</h1>
        <img src="../image/${gatos[id].img}" alt="${gatos[id].id}">    
        <h4>comida favorita: ${gatos[id].comidaFav}</h4>
        <h4>edad: ${gatos[id].edad}</h4>
    </body>
  </html>`);
});

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);