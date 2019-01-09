import Sequelize from 'sequelize';

export default function (sequelize) {
  const Organization = sequelize.define('Organization', {
    name: Sequelize.STRING,
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
  })

  // User.associate = (models) => {
  //   User.hasMany(models.Project);
  // };
}
