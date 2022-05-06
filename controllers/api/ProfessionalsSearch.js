const router = require("express").Router();
const { Company, Professionals } = require("../../models");

router.get("/login", async (req, res) => {
  // res.render("logincompany");
  res.render("logincompany", {
    layout: "login",
  });
});

// 3rd api `localhost:3001/api/sign-up/professional-search/`
// DOES NOT WORK
router.get("/", async (req, res) => {
  const professionalData = await Professionals.findAll().catch((err) => {
    res.status(500).json(err);
  });
  const professionals = professionalData.map((professional) =>
    professional.get({ plain: true })
  );
  console.log(professionals);
  res.render("professionalcard", {
    layout: "main",
    professionals,
  });
});

module.exports = router;
