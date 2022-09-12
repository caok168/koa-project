const Router = require('@koa/router')
const router = new Router({ prefix: '/api/v1' })
const userController = require('../controller/userController')

const { registerValidate, loginValidate } = require('../middleware/userValidate')



router.get('/test', async ctx => {ctx.body = 'Hello World'})

router.post('/user/register', registerValidate, userController.register)
router.post('/user/login', loginValidate, userController.login)


module.exports = router