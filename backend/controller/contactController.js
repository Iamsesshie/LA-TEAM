const dataBase = require("../config/mysql")

exports.register = (req, res) => {
    const connectedUsername = req.username; // Obtenez le nom de l'utilisateur connecté depuis votre middleware d'authentification
    
    // Remplacez 'users' par le nom de votre table dans la base de données
    const query = 'SELECT username FROM users /* WHERE username != ? */'; // Ajoutez la condition pour exclure l'utilisateur connecté

    dataBase.query(query, [connectedUsername], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des contacts depuis la base de données:', err);
            res.status(500).json({ error: 'Erreur serveur' });
        } else {
            const contacts = results.map(result => result.username);
            res.status(200).json({ contacts });
        }
    });
}

