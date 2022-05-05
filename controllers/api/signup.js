const router = require("express").Router();
const { Company, Professionals } = require("../../models");

// if statement for user vs Company 
// router.get("/", async (req, res) => {});

// 3rd api `localhost:3001/api/sign-up/professional`
// WORKS
  router.post("/professional", async (req, res) => {
    try {
      const newUser = await Professionals.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        linked_in: req.body.linked_in,
        github: req.body.github,
        city: req.body.city,
        profession: req.body.profession,
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

// company signup post request
// 3rd api `localhost:3001/api/sign-up/company`
// WORKS
  router.post("/company", async (req, res) => {
    try {
      const newCompany = await Company.create({
        company: req.body.company,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        
      });
      req.session.save(() => {
        req.session.userId = newCompany.id;
        req.session.username = newCompany.username;
        req.session.loggedIn = true;
  
        res.json(newCompany);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
