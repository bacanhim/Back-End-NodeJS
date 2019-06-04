const express = require('express');
const router = express();

var author_controler = require('../controller/personController.js');

router.get("/persons/:id", author_controler.author_detail);

// router.get("/persons", author_controler.author_list);

module.exports = router;