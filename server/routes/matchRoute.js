const express = require('express');
const matchController = require('../controllers/matchController');
const router = express.Router();


router.get('/:id', matchController.getMatch, (req, res) => {
    res.status(200).send(res.locals.listofMatches);
})


module.exports = router;
