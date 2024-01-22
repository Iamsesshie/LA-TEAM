
var contacts = ['Alice', 'Bob', 'Charlie', 'David'];


var contactsSlider = document.getElementById('contactsSlider');
contacts.forEach(function(contact) {
    var contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    contactDiv.innerHTML = `
        <img src="${contact.toLowerCase()}_avatar.jpg" alt="${contact}'s Avatar" class="avatar">
        <div class="contact-info">
            <h2>${contact}</h2>
            <p>Last Seen: ${Math.floor(Math.random() * 60)} minutes ago</p>
        </div>
    `;
    contactDiv.onclick = function() {
        loadChat(contact);
    };
    contactsSlider.appendChild(contactDiv);
});

function loadChat(contactName) {
    var chatHeader = document.getElementById('chatHeader');
    var chatMessages = document.getElementById('chatMessages');

    chatMessages.innerHTML = '';

    var contactAvatar = document.createElement('img');
    contactAvatar.src = contactName.toLowerCase() + '_avatar.jpg';
    contactAvatar.alt = contactName + "'s Avatar";

    var contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `<h2>${contactName}</h2><p>Last Seen: Just now</p>`;

    chatHeader.innerHTML = '';
    chatHeader.appendChild(contactAvatar);
    chatHeader.appendChild(contactInfo);
}


function openFileInput() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();
}


function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var chatMessages = document.getElementById('chatMessages');
    var fileInput = document.getElementById('fileInput');

    //div pour le message
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    // Ajout du texte pour message
    var messageText = document.createElement('p');
    messageText.textContent = messageInput.value;
    messageDiv.appendChild(messageText);

    // Vérification si fichier a ete selectionné
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];

        // Vérifions type de fichier
        if (file.type.startsWith('image/')) {
            // Si c'est une image, afficher une prévisualisation
            var imagePreview = document.createElement('img');
            imagePreview.src = URL.createObjectURL(file);
            
            // Ajout des styles pour définir la taille maximale de l'image
            imagePreview.style.maxWidth = '100%'; 
            imagePreview.style.maxHeight = '200px'; 
            
            messageDiv.appendChild(imagePreview);
        } else {
            // Pour d'autres types de fichiers, affichage du lien de téléchargement
            var fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(file);
            fileLink.target = '_blank';
            fileLink.textContent = file.name;
            messageDiv.appendChild(fileLink);
        }
    }

    // Ajout de la div du message à la liste des messages
    chatMessages.appendChild(messageDiv);

    // vidage des champs après l'envoi du message
    messageInput.value = '';
    fileInput.value = '';

    // défilement vers le bas pour afficher le dernier message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
