const router = require("express").Router();
const { Professionals } = require("../../models");

// 3rd url `localhost:3001/api/company-search/`
// WORKS (GETS POSTED professionals sign up data as well)
router.get("/", async (req, res) => {
    try {
      const signedOutData = await Professionals.findAll({});
      res.status(200).json(signedOutData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;