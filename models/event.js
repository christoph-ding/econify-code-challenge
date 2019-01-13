import Sequelize from 'sequelize';

export default function (sequelize) {
  const Event = sequelize.define('Event', {
    date: Sequelize.STRING,
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
}
