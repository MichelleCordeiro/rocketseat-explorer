const knex = require('../database/knex')
const AppError = require('../utils/AppError.js')
const { compare } = require('bcryptjs')

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex('users').where({ email }).first()

    if (!user) {
      throw new AppError('E-mail e/ou senha incorreta', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('E-mail e/ou senha incorreta', 401)
    }

    return response.json(user)
  }
}

module.exports = SessionsController
