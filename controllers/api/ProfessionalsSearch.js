const router = require("express").Router();
const { Company } = require("../../models");
const withAuth = require("../../utils/auth");

// 3rd api `localhost:3001/api/sign-up/professional-search/
router.get("/", async (req, res) => {
  try {
    const signedOutData = await Company.findAll({});
    res.status(200).json(signedOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
