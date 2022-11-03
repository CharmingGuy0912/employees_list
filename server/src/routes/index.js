const Router = require('express').Router;
const router = new Router();
const employeeRouter = require('./employee.route');

router.use('/employees', employeeRouter);

module.exports = router;
