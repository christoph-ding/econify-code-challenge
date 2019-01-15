import sequelize from '../models';

export default function resolvers () {
  const models = sequelize.models;

  return {
    Query: {
      organization (root, {id}, context) {
        return {
          'id': id
        }
      },
      organizations (root, args, context) {
        return models.Organization.findAll({}, context);
      },
      event (root, {id}, context) {
        return {
          'id': id
        }
      },
      events (root, args, context) {
        return models.Event.findAll({}, context);
      },
      location () {
        return {
          'id': id
        }
      },
      locations (root, args, context) {
        return models.Location.findAll({}, context);
      }
    },

    Mutation: {
      createOrganization (root, {name}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Organization.create({name: name})
        })
        .then((item) => {
          return item
        })
        .catch((err) => {
          return err
        })
      },

      deleteOrganization (root, {name}, context) {
        console.log('deleting organization ', name)
        return Promise.resolve()
        .then(() => {
          return models.Organization.destroy({
            where: {
              name: name
            }
          })
        })
        .then((item) => {
          return 'deleted organization ' + name
        })
        .catch((err) => {
          return err
        })
      },

      createEvent (root, {name, date, description}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Event.create(
            {name: name,
             date: date,
             description: description
            }
          )
        })
        .then((item) => {
          return item
        })
        .catch((err) => {
          return err
        })
      },      

      deleteEvent (root, {name}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Event.destroy({
            where: {
              name: name
            }
          })
        })
        .then((item) => {
          return 'deleted event ' + name
        })
        .catch((err) => {
          return err
        })
      },

      createLocation (root, {name, address, latitude, longitude}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Location.create(
            {name: name,
             address: address,
             latitude: latitude,
             longitude: longitude
            }
          )
        })
        .then((item) => {
          return item
        })
        .catch((err) => {
          return err
        })
      },

      deleteLocation (root, {name}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Location.destroy({
            where: {
              name: name
            }
          })
        })
        .then((item) => {
          return 'deleted event ' + name
        })
        .catch((err) => {
          return err
        })
      }
    }
  }
}
