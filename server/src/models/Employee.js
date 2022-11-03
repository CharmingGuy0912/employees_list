module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define(
		'employees',
		{
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
		},
		{
			timestamps: false,
		}
	);

	return Employee;
};
