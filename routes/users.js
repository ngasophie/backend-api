const router = require('express').Router()
const userCtrl = require('../controllers/userControllers')
const {validateSignIn, validateLogIn , validateUser} = require('../middlewares/validate')
const {auth, authAdmin} = require("../middlewares/authentication")
router.get("/:id",auth , userCtrl.getdata)
router.post("/sign-in", validateSignIn, userCtrl.createUser)
router.post("/log-in", validateLogIn, userCtrl.logIn)
router.get("/token/refresh-token", userCtrl.refreshToken)
router.put('/update',auth, validateUser, userCtrl.updateUser)
router.post("/update-password", auth, userCtrl.updatePass)
//router.post('/getListUser', auth, authAdmin, userCtrl.getListUser)
module.exports = router