const router = require("express").Router();
const { Company, Professionals } = require("../../models");

router.get("/login", async (req, res) => {
  // res.render("logincompany");
  res.render("logincompany", {
    layout: "login"
  });
});

// 3rd url `localhost:3001/api/company-search/`
// WORKS (GETS POSTED professionals sign up data as well)
router.get("/", async (req, res) => {
    const companyData = await Company.findAll().catch ((err)=> {
    res.status(500).json(err);
  })
  const companies = companyData.map((company) => company.get({ plain: true }));
      console.log(companies)
      res.render('companycards', {
         layout: 'main',
        companies, });
});

module.exports = router;
