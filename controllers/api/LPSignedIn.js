const router = require("express").Router();
const { Company, Professionals } = require("../../models");
const withAuth = require("../../utils/auth");

// 3rd url `localhost:3001/api/signed-in-LP/company`
// WORKS (Displays main.handlebar)
router.get("/company", async (req, res) => {
  try {
    const postData = await Company.findAll({
      where: {
        id: req.session.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("login", {
      layout: "main",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// GET professionals

// logout route
// router.post("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
