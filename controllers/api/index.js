const router = require('express').Router();

// `controllers` variables
const companiesSearch = require('./CompaniesSearch');
const professionalsSearch = require('./ProfessionalsSearch');
const signedInLP = require('./LPSignedIn');
const signup = require('./signup');
const signedOutLP = require('./LPSignedOut');

// 2nd urls...
// `localhost:3001/api/company-search`
router.use('/company-search', companiesSearch);
// `localhost:3001/api/professional-search`
router.use('/professional-search', professionalsSearch);
// `localhost:3001/api/signed-in-LP`
router.use('/signed-in-LP', signedInLP);
// `localhost:3001/api/sign-up`
router.use('/sign-up', signup);
// `localhost:3001/api/signed-out-LP`
router.use('/signed-out-LP', signedOutLP);

module.exports = router;

