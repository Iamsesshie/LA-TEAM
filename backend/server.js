/* const express = require ('express')
const dataBase = require("./config/mysql")
const app = express();

const cors = require('cors')
app.use(cors())
app.use(express.json())



app.post("/users/register",(req, res)=>{ 
    console.log(req.body.username);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.age);
    console.log(req.body.password);

    let InsertUsersQuery = "INSERT INTO users (Username, Email, PasswordHash) VALUES(?,?,?) "

    dataBase.query(InsertUsersQuery,[req.body.username, req.body.email ,req.body.password],
    (error, result)=>{
        if(error) throw error
        res.status(201).json("save")
    }
    )

})

app.listen(5000, () => {
    console.log("bonjourrrr");
}) */













const express = require("express");
const userRoute = require("./routes/userRoute")
const contactRoute = require("./routes/contactRoute")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())




app.use("/user" , userRoute)
app.use("/contact", contactRoute)



app.listen(5000 || process.env.PORT)





/* const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('Nouvelle connexion:', socket.id);

  // Gestion des messages
  socket.on('message', (data) => {
    io.emit('message', data);
  });

  // Gestion de la déconnexion
  socket.on('disconnect', () => {
    console.log('Déconnexion:', socket.id);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
}); */









