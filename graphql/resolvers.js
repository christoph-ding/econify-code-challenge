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
        return Promise.resolve()
        .then(() => {
          return models.Organization.destroy({
            where: {
              name: name
            }
          })
        })
        .then(() => {
          return item
        })
        .catch((err) => {
          return err
        })
      },

      updateOrganization(root, {originalName, newName}, context) {
        return Promise.resolve()
        .then(() => {
          return models.Organization.update(
            {name: newName},
            {where: {name: originalName}}
          )
        })
        .then(() => {
          return 'updated organization ' + originalName + ' to ' + newName
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
        .then(() => {
          return 'deleted event ' + name
        })
        .catch((err) => {
          return err
        })
      },

      updateEvent(root, {originalName, name, date, description}, context) {
        return Promise.resolve()
        .then(() => {
          let updateObject = {}
          let updateFields = arguments[1]
          for (let field in updateFields) {
            if (field !== 'originalName') {
              updateObject[field] = updateFields[field]
            }
          }
          return models.Event.update(
            updateObject,
            {where: {name: originalName}}
          )
        })
        .then(() => {
          return 'updated event ' + originalName
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
        .then(() => {
          return 'deleted event ' + name
        })
        .catch((err) => {
          return err
        })
      },

      updateLocation(root, {originalName, address, latitude, longitude}, context) {
        return Promise.resolve()
        .then(() => {
          let updateObject = {}
          let updateFields = arguments[1]
          for (let field in updateFields) {
            if (field !== 'originalName') {
              updateObject[field] = updateFields[field]
            }
          }
          return models.Location.update(
            updateObject,
            {where: {name: originalName}}
          )
        })
        .then(() => {
          return 'updated location ' + originalName
        })
        .catch((err) => {
          return err
        })
      }
    }
  }
}
