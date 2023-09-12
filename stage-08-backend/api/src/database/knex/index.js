const config = require('../../../knexfile')
const knex = require('knex')

const connection = knex.Knex(config.development)

module.exports = connection