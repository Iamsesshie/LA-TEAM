document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupération des valeur d input
        const username = document.getElementById('username').value;
        const PasswordHash = document.getElementById('password').value;

        // Création d objet avec les valeur d input
        const formData = {
            username: username,
            PasswordHash: PasswordHash
        };

        // Envoi des données au backend pour l'authentification
        fetch("http://localhost:5000/user/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(formData) 
        })
        .then(response => {
            if (response.headers) {
                console.log("ok");
                // La requête a réussi
                // Rediriger l'utilisateur vers l accueil
                window.location.href = '../html/firstpage.html';
            } else {
                
                console.error("Échec de l'authentification");
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
