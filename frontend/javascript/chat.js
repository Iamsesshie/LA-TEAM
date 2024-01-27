


function openFileInput() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();
}


// function sendMessage() {
//     var messageInput = document.getElementById('messageInput');
//     var chatMessages = document.getElementById('chatMessages');
//     var fileInput = document.getElementById('fileInput');
//     var messageDiv = document.createElement('div');
//     messageDiv.className = 'message';
//     var messageText = document.createElement('p');
//     messageText.textContent = messageInput.value;
//     messageDiv.appendChild(messageText);


//     if (fileInput.files.length > 0) {
//         var file = fileInput.files[0];

        
//         if (file.type.startsWith('image/')) {
            
//             var imagePreview = document.createElement('img');
//             imagePreview.src = URL.createObjectURL(file);
            
            
//             imagePreview.style.maxWidth = '100%'; 
//             imagePreview.style.maxHeight = '200px'; 
            
//             messageDiv.appendChild(imagePreview);
//         } else {
            
//             var fileLink = document.createElement('a');
//             fileLink.href = URL.createObjectURL(file);
//             fileLink.target = '_blank';
//             fileLink.textContent = file.name;
//             messageDiv.appendChild(fileLink);
//         }
//     }

    
//     chatMessages.appendChild(messageDiv);
//     messageInput.value = '';
//     fileInput.value = '';
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// function sendMessage() {
//   var messageInput = document.getElementById('messageInput');
//   var chatMessages = document.getElementById('chatMessages');
//   var fileInput = document.getElementById('fileInput');
  
//   var messageDiv = document.createElement('div');
//   messageDiv.className = 'message';
  
//   // Ajout de l'heure d'envoi du message
//   var timestamp = new Date();
//   var timeString = timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
//   var timeElement = document.createElement('span');
//   timeElement.className = 'message-time';
//   timeElement.textContent = timeString;
//   messageDiv.appendChild(timeElement);

//   // Ajout du texte du message
//   var messageText = document.createElement('p');
//   messageText.textContent = messageInput.value;
//   messageDiv.appendChild(messageText);

//   if (fileInput.files.length > 0) {
//       var file = fileInput.files[0];
      
//       if (file.type.startsWith('image/')) {
//           var imagePreview = document.createElement('img');
//           imagePreview.src = URL.createObjectURL(file);
//           imagePreview.style.maxWidth = '10%'; 
//           imagePreview.style.maxHeight = '20px'; 
//           messageDiv.appendChild(imagePreview);
//       } else {
//           var fileLink = document.createElement('a');
//           fileLink.href = URL.createObjectURL(file);
//           fileLink.target = '_blank';
//           fileLink.textContent = file.name;
//           messageDiv.appendChild(fileLink);
//       }
//   }

//   chatMessages.appendChild(messageDiv);
//   messageInput.value = '';
//   fileInput.value = '';
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// }

function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var chatMessages = document.getElementById('chatMessages');
  var fileInput = document.getElementById('fileInput');
  
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  
  // Ajout de l'heure d'envoi du message
  var timestamp = new Date();
  var timeString = timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  var timeElement = document.createElement('span');
  timeElement.className = 'message-time';
  timeElement.textContent = timeString;
  messageDiv.appendChild(timeElement);

  // Ajout du texte du message
  var messageText = document.createElement('p');
  messageText.textContent = messageInput.value;
  messageDiv.appendChild(messageText);
  // ... (votre code existant)




  if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
      
      if (file.type.startsWith('image/')) {
          var imagePreview = document.createElement('img');
          imagePreview.src = URL.createObjectURL(file);
          imagePreview.style.maxWidth = '100%'; 
          imagePreview.style.maxHeight = '200px'; 
          messageDiv.appendChild(imagePreview);
      } else {
          var fileLink = document.createElement('a');
          fileLink.href = URL.createObjectURL(file);
          fileLink.target = '_blank';
          fileLink.textContent = file.name;
          messageDiv.appendChild(fileLink);
      }
  }

  chatMessages.appendChild(messageDiv);
  messageInput.value = '';
  fileInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

  
  