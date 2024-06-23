const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ThisIsJWTSecretCode"; // eg- const secret = 'your-256-bit-secret';

// Create a User using:POST "/api/auth/creatuser" . No login required
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }).withMessage("Enter a valid name"),
    body("email")
      .isEmail()
      .withMessage("Enter Valid Email for eg- xyz@gmail.com"),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(req.body);
    // if there are errors , return Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    /*
    const user = User(req.body);
    res.send(req.body);
    user.save(); 
    */
    // check wether the user with this email alrrwady exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      // create a new user
      const salt = await bcryptjs.genSalt(10);
      const securePassword = await bcryptjs.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password,
        password: securePassword,
      });
      //    .then(user => res.json(user))
      //    .catch(err => {
      //     console.log(err);
      //     res.json({error:"Please Enter a valid Email" , message: err.message});

      const data = {
        // this is also called payload
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      //   res.json(user);
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured ");
    }
  }
);
// }
// );

module.exports = router;
