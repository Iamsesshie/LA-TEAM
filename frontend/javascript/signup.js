document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupération des inputs
        const username = document.getElementById('username').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const password = document.getElementById('password').value;

        // Création d'objet avec les valeurs d inputs
        const formData = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            password: password
        };


        fetch("http://localhost:5000/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
