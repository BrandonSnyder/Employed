
const router = require('express').Router();
const apiRoutes = require('./api');

// First url localhost:3001/api

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>wrong route!</h1>")
});

module.exports = router;
