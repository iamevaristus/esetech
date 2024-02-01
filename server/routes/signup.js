var express = require("express");
const { addDoc, collection } = require("firebase/firestore");
const { createUserWithEmailAndPassword } = require("firebase/auth");
var router = express.Router();

router.post("/register", async (request, response) => {
  const { email, fullname, password } = request.body;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      fullname,
      email,
    });
    response.send(user.refreshToken)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
})

module.exports = router;
