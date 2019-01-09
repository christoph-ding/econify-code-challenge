import sequelize from '../models';

export default function resolvers () {
  const models = sequelize.models;

  return {
    Query: {}
  }
}
