const catchErrors = require('../middlewares/catchErrors')
const express = require('express');
const authorize = require('../middlewares/auth')
const router = express.Router();
const Enums = require('../models/enums')
const companyController = require('../controllers/company.controller');

const { MEMBER, ADMIN, SUPER_ADMIN } = Enums.ROLES

router.post('/create',catchErrors(companyController.createCompany));
router.put('/add-member', catchErrors(companyController.addMemberToCompany))

module.exports = router;