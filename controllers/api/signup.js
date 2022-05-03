const router = require("express").Router();
const { User, Profile } = require("../../models");

// with Auth is logged in !!

router.post('/', withAuth, async (req, res) => {
    try {
      const newProfile = await Profile.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newProfile);
    } catch (err) {
      res.status(400).json(err);
    }
  });
