// Ici on charge express afin de pouvoir s'en servire dans notre application
const express = require("express")

// Ici on met express dans une constante app 
const app = express();

// ici on créer un route pour affcher un message simple simple
app.get('/api/movie', (req, res) =>{
    res.send('Build something amazing! 🚀')
})
app.listen(5000,() => console.log('Le serveur est lancé sur le port 5000'));