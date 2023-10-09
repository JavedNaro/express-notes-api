let express = require("express")
let router = express.Router();
let resources = require('../controller/notes')
router.get('/',resources.getnotes)
module.exports = router;