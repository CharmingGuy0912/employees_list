const sequelize = require('sequelize');
const { Employee } = require('../models');

exports.create = async (req, res) => {
	try {
		const employee = await Employee.create(req.body);
		res.status(200).send(`Created a new employee: ID ${employee.id}.`);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.readAll = async (req, res) => {
	try {
		const employees = await Employee.findAll();
		res.status(200).send(employees);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.readByID = async (req, res) => {
	const { id } = req.params;

	try {
		const employee = await Employee.findOne({ where: { id } });
		if (employee) {
			res.status(200).send(employee);
		} else {
			res.status(404).send(`Failed to find an employee: ID ${id}`);
		}
	} catch (err) {
		res.staus(500).send(err.message);
	}
};

exports.update = async (req, res) => {
	const { id } = req.params;

	try {
		const employee = await Employee.update(req.body, { where: { id } });
		if (employee) {
			res.status(200).send(`Updated an employee: ID ${id}.`);
		} else {
			res.status(404).send(`Failed to update an employee: ID ${id}`);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.delete = async (req, res) => {
	const { id } = req.params;

	try {
		const employee = await Employee.destroy({ where: { id: id } });
		res.status(200).send(`Removed an employee: ID ${id}`);
	} catch (err) {
		res.status(500).send(err.message);
	}
};
