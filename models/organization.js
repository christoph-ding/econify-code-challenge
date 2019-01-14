import Sequelize from 'sequelize';

export default function (sequelize) {
  const Organization = sequelize.define('Organization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      unique: true
    },
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
}
  // Organization.associate = (models) => {
  //   Organization.hasMany(models.Location);
  //   Organization.hasMany(models.Event);
  // };
