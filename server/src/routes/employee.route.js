const Router = require('express').Router;
const router = new Router();
const employees = require('../controllers/employee.controller');

router.post('/', employees.create);
router.get('/', employees.readAll);
router.get('/:id', employees.readByID);
router.put('/:id', employees.update);
router.delete('/:id', employees.delete);

module.exports = router;
