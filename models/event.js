import Sequelize from 'sequelize';

export default function (sequelize) {
  const Event = sequelize.define('Event', {
    date: Sequelize.STRING,
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    description: Sequelize.STRING,
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

  Event.associate = (models) => {
    Event.belongsTo(models.Organization)
  }
}
