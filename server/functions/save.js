const fs = require('fs')

function Save(movieID) {
    // avec fs ici on vérifie que le fichier est disponible
    fs.readFile('../data.json', 'utf8', (err, data) => {
        if(err) {
            res.status(500).send('Une erreur s\'est produite avec le serveur');
        }
    })
}
module.exports = Save