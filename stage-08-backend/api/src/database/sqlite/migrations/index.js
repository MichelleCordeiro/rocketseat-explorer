const sqliteConnection = require('../../sqlite')
const creataUsers = require('./createUsers')

async function migrationsRun() {
  const schemas = [
    creataUsers
  ].join('')

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun