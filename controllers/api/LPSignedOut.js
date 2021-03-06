const router = require("express").Router();
const { Company, Professionals } = require("../../models");

// 
// render home 1st page
router.get('/', async (req, res) => {
  const companyData = await Company.findAll().catch((err) => { 
      res.json(err);
    });
      const companies = companyData.map((company) => company.get({ plain: true }));
      console.log(companies)
      res.render('companycards', {
         layout: 'main',
        companies, });
    });

// router.get('/',  (req, res) => {
// res.render("login");
// });
// 3rd api `localhost:3001/api/signed-out-LP/`
// WORKS


// router.get("/", async (req, res) => {
//   try {
//     const signedOutData = await Company.findAll({});
//     res.status(200).json(signedOutData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// login post
// 3rd api `localhost:3001/api/signed-out-LP/company/login`
// WORKS ("You are now logged in!")
router.post("/company/login", async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await Company.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "invalid password!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "general error" });
  }
});

// professional login
// 3rd api `localhost:3001/api/signed-out-LP/professionals/login`
// WORKS ("You are now logged in!")
router.post("/professionals/login", async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await Professionals.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "invalid password!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "general error" });
  }
});

module.exports = router;
