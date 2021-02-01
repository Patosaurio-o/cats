const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

const gatos = [
  { 
    id: "cat1", 
    img: "gato1.jpg", 
    edad: "10 años" , 
    comidaFav: "todo lo que sea vegano", 
    lugaresDondeDuerme: ["bajo de un camion", "en el techo"] 
  },
  { 
    id:"cat2", 
    img: "gato2.jpg", 
    edad: "5 meses", 
    comidaFav: "carne", 
    lugaresDondeDuerme: ["en una cama", "en una caja", "en la colcha del gato de la jenny"] 
  },
  { 
    id: "cat3", 
    img: "gato3.jpg", 
    edad: "2 años", 
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
  res.render("details", { gatos : gatos[id] }); 
  if(id != undefined){
    res.redirect("/index.html")
  }
}); 
/*  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>gato: ${gatos[id].id} </title>
        <link rel="stylesheet" href="../css/styles.css">
      </head>
      <body>   
        <h1 class="titulo">Details Page for Cuddles</h1>
        <img class="gatito2" src="../image/${gatos[id].img}" alt="${gatos[id].id}">    
        <h4 class="BA67C8v1">comida favorita: ${gatos[id].comidaFav}</h4>
        <h4 class="BA67C8v2" >edad: ${gatos[id].edad}</h4>
        <div class="BA67C8v3"> 
        <p>lugares donde duerme:</p> 
          <ul>
            <li>${gatos[id].lugaresDondeDuerme[0]}</li>
            <li>${gatos[id].lugaresDondeDuerme[1]}</li>
          </ul> 
      </body>
    </html>`
  );
});
*/
const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);