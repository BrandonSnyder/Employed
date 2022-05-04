const router = require('express').Router();


// const companiesSearch = require('./companiesSearch');
// const professionalsSearch = require('./professionalsSearch');
// const signedInLP = require('./LPSignedIn');
const signup = require('./signup');
const signedOutLP = require('./LPSignedOut');


// router.use('/company-search', companiesSearch);
// router.use('/professional-search', professionalsSearch);
// router.use('/signed-in-LP', signedInLP);
router.use('/sign-up', signup);
router.use('/signed-out-LP', signedOutLP);

module.exports = router;
