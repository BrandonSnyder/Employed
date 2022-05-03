const router = require("express").Router();
const { User, Profile } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const signedOutData = await User.findAll({
      include: [{ model: Profile }],
    });
    res.status(200).json(signedOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
