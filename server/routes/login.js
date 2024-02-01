var express = require("express");
const { signInWithEmailAndPassword } = require("firebase/auth");
var router = express.Router();

router.post("/login", async(request, response, next) => {
  const{ email, password } = request.body;

  try {
    var result = await signInWithEmailAndPassword(auth, email, password);
    response.send(result.user.refreshToken)
    console.log(result)
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;
