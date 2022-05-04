const router = require("express").Router();
const { User, Profile } = require("../../models");

// with Auth is logged in !!
// router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      linked_in: req.body.linked_in,
      github: req.body.github,
      user_id: req.body.user_id,
      profession: req.body.profession,
      person_or_company: req.body.person_or_company,
      city: req.body.city,
    });
    
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newProfile = await User.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
//       res.status(200).json(newProfile);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

module.exports = router;
