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
      organizations () {
        return organizations
      },
      event (root, {id}, context) {
        return {
          'id': id
        }
      },
      events () {
        return events
      },
      location () {
        return {
          'id': id
        }
      },
      locations () {
        return locations
      }
    },

    Mutation: {
      test () {
        console.log('doing something...')
        return 'did something with your mutation'
      }
    }
  }
}

// user (root, { id }, context) {
//   return models.User.findById(id, context);
// },
// users (root, args, context) {
//   return models.User.findAll({}, context);
// }
