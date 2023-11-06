// Ici on charge express afin de pouvoir s'en servire dans notre application
const express = require("express");

// Ici on met express dans une constante app
const app = express();
const PORT = 5001;
    // Middleware pour gérer les requetes POST
    app.use(express.urlencoded({extended:true}))
// ici on créer un route pour affcher un message simple simple
app.post("/api/save", (req, res) => {
    const imdbID = req.body.imdbID
  res.send("Build something amazing! 🚀");
  console.log(imdbID);
});
app.listen(PORT, () => console.log("Le serveur est lancé sur le port " + PORT));
