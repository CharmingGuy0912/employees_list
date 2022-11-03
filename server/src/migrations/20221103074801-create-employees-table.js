'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('employees', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
			},
			position: {
				type: Sequelize.STRING,
			},
			level: {
				type: Sequelize.ENUM('junior', 'mid', 'senior'),
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('employees');
	},
};
