import Sequelize from 'sequelize';

import Organization from './organization';
import Location from './location';
import Event from './event';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false
});

Organization(sequelize);
Location(sequelize);
Event(sequelize);

const models = sequelize.models;

Object.keys(models).forEach(name => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

sequelize.sync();

export default sequelize;
