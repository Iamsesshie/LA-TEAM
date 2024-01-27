


var contacts = [];


fetch("http://localhost:5000/contact/contacts")
    .then(response => response.json())
    .then(data => {
        contacts = data.contacts;
        var contactsSlider = document.getElementById('contactsSlider');
        contacts.forEach(function(contact) {
            var contactDiv = document.createElement('div');
            contactDiv.className = 'contact';
            contactDiv.innerHTML = `
            <h2>${contact}</h2>
            `;
            contactDiv.onclick = function() {
                loadChat(contact);
            };
            contactsSlider.appendChild(contactDiv);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des contacts:', error);
    });

function loadChat(contactName) {
    var chatHeader = document.getElementById('chatHeader');
    var chatMessages = document.getElementById('chatMessages');

    chatMessages.innerHTML = '';

    var contactAvatar = document.createElement('img');
    contactAvatar.src = '../OIP.jpeg'
    contactAvatar.alt = contactName + "'s Avatar";

    var contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `<h2>${contactName}</h2><p>Last Seen: Just now</p>`;

    chatHeader.innerHTML = '';
    chatHeader.appendChild(contactAvatar);
    chatHeader.appendChild(contactInfo);
}
