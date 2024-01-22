const dataBase = require("../config/mysql")
const bcrypt = require("bcrypt")





exports.signup = (req,res) => {
    console.log(req.body);
    

    let insertUserQuery = "INSERT INTO users (Username, Email, PasswordHash) VALUES (?,?,?)"

    bcrypt
    .hash(req.body.password, 5)
    .then((hash) => {
        dataBase.query(
            insertUserQuery,
            [req.body.username, req.body.email ,hash],
            (error, result)=>{
                if (error) {
                    res.status(401).json(error)
                }
                res.status(201).json({hash, id: result.insertId})
            }  
        ) 
        
        
        
    })
    .catch((error) => {
        res.status(500).json(error)
    })
    

}




exports.login = (req, res) => {
    console.log(req.body);

    let selectUserQuery = "SELECT * FROM `users` WHERE username=?";
    dataBase.query(selectUserQuery, [req.body.username], (error, result) => {
        if (error) {
            res.status(500).json({ error: "Internal server error ooooo" });
        } else if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].PasswordHash)
                .then((valid) => {
                    if (valid) {
                        res.status(200).json({ message: "Login successful", id: result[0].Surname });
                    } else {
                        res.status(401).json({ error: "Incorrect password" });
                    }
                })
                .catch((error) => {
                    res.status(500).json({ error: "Internal server error ooooooooooooooooo" });
                });
        } else {
            res.status(401).json({ error: "User not found" });
        }
    });
}