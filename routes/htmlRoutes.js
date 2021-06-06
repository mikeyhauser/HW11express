const path = require('path');
const router = require('express').Router()

router.get('/notes', (req, res) => { res.sendFile(path.join(__dirname, '../public/notes.html'))});
//** use curly brack if you have multiple lines in the function */
router.get('/', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html'))});


module.exports = router