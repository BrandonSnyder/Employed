const router = require("express").Router();
const { Company } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const signedOutData = await Company.findAll({});
    res.status(200).json(signedOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
