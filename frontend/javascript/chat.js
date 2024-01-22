document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
  
    // Gestion des messages
    socket.on('message', (data) => {
      const chatMessages = document.getElementById('chatMessages');
      chatMessages.innerHTML += `<p>${data}</p>`;
    });
  
    // Fonction pour envoyer un message
    function sendMessage() {
      const messageInput = document.getElementById('messageInput');
      const message = messageInput.value;
      socket.emit('message', message);
      messageInput.value = '';
    }
  
    // Fonction pour ouvrir la boîte de dialogue de sélection de fichier
    function openFileInput() {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    }
  
    // Gestion des fichiers sélectionnés
    document.getElementById('fileInput').addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        // envoi du fichier au serveur
        console.log('Fichier sélectionné:', file.name);
      }
    });
  });
  