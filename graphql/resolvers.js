import sequelize from '../models';

// example data
const organizations = [
  { id: 1, name: 'Tom'},
  { id: 2, name: 'Sashko'},
  { id: 3, name: 'Mikhail'}
];

const events = [
  { id: 1, name: 'Tom'},
  { id: 2, name: 'Sashko'},
  { id: 3, name: 'Mikhail'}
];

const locations = [
  { id: 1, name: 'Tom'},
  { id: 2, name: 'Sashko'},
  { id: 3, name: 'Mikhail'}
];

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

      createLocation (root, {name, address, latitude, longitude}, context) {
        console.log('creating location')
        console.log()
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
      }
    }
  }
}

  // resolve (source, args) {
  //   return models.quote
  //     .findById(args.id)
  //     .then((quote) => {
  //       return quote.update({ quote: args.quote });
  //     });
  // }

// return models.Organization.create({
//          id: '1100000',
//          name: 'test'
//        })

// models.User.create({
//     firstname: 'John',
//     lastname: 'Doe',
//     email: 'john.doe@example.com'
//   })

// user (root, { id }, context) {
//   return models.User.findById(id, context);
// },
// users (root, args, context) {
//   return models.User.findAll({}, context);
// }
