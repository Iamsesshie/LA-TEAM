const express = require("express");
const contactCtrl = require("../controller/contactController")

const router = express.Router()

router.get("/contacts", contactCtrl.register)

module.exports = router