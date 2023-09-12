const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

function myMiddleware(request, response, next) {
  console.log('Você passou no middleware.')
  // console.log(request.body)
  // if(!request.body.isAdmin) {
  //   return response.json({ message: "User unauthorized" })
  // }
  
  next()
}

const usersController = new UsersController()

// assim aplica o middleware a todas as rotas de usuário, precisa ver se faz sentido
// usersRoutes.use(myMiddleware)

// usersRoutes.post('/', myMiddleware, usersController.create)
usersRoutes.post('/', usersController.create);
usersRoutes.put('/:id', usersController.update);

module.exports = usersRoutes