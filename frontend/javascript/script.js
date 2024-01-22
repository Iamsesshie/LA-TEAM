function goToHomePage() {
    window.location.href = "acceuil.html";
}


function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var mediaInput = document.getElementById('mediaInput');
    var messagesContainer = document.getElementById('messages');

    if (messageInput.value.trim() !== '' || mediaInput.files.length > 0) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.classList.add('sent');

        var userSpan = document.createElement('span');
        userSpan.className = 'user';
        userSpan.innerText = 'You';

        var timestampSpan = document.createElement('span');
        timestampSpan.className = 'timestamp';
        var now = new Date();
        timestampSpan.innerText = now.getHours() + ':' + now.getMinutes();

        var messageText = document.createElement('p');
        messageText.innerText = messageInput.value;

        messageDiv.appendChild(userSpan);
        messageDiv.appendChild(timestampSpan);

        if (mediaInput.files.length > 0) {
            var mediaFile = mediaInput.files[0];
            var mediaImage = document.createElement('img');
            mediaImage.src = URL.createObjectURL(mediaFile);
            mediaImage.className = 'media-image';
            messageDiv.appendChild(mediaImage);
        }

        messageDiv.appendChild(messageText);

        messagesContainer.appendChild(messageDiv);


        messageInput.value = '';
        mediaInput.value = '';

        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}


function openMediaInput() {
    var mediaInput = document.getElementById('mediaInput');
    mediaInput.click();
}



function populateUserList() {
    var userList = document.getElementById('userList');
    var users = ['User1', 'User2', 'User3', 'User4', 'User5'];

    users.forEach(function (username) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="username">${username}</span>
            <span class="actions">
                <button onclick="sendFriendRequest('${username}')">Send Request</button>
            </span>
        `;
        userList.appendChild(listItem);
    });
}


function sendFriendRequest(username) {
    var friendRequestsList = document.getElementById('friendRequestsList');
    var listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="username">${username}</span>
        <span class="actions">
            <button onclick="acceptFriend('${username}')">Accept</button>
            <button onclick="rejectFriend('${username}')">Reject</button>
        </span>
    `;
    friendRequestsList.appendChild(listItem);
}


