const router = require("express").Router();
const { Company } = require("../../models");


router.get("/login", async (req, res) => {
  res.render("logincompany");
  console.log("i made it this far");
});


// 3rd api `localhost:3001/api/sign-up/professional-search/`
// DOES NOT WORK
router.get("/", async (req, res) => {
  try {
    const signedOutData = await Company.findAll({});
    res.status(200).json(signedOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;