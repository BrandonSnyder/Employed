const router = require("express").Router();
const { Professionals } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const signedOutData = await Professionals.findAll({});
      res.status(200).json(signedOutData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;