const { User } = require('../model')
const { createToken } = require('../util/jwt')

// 用户登陆
module.exports.login = async ctx => {
    var dbback = await User.findOne(ctx.request.body) 
    if (!dbback) {
        return ctx.throw(402, "邮箱或者密码不正确")
    }
    var token = await createToken(dbback._doc)
    dbback._doc.token = token
    ctx.body = dbback._doc
}

module.exports.register = async ctx => {
    const userModel = new User(ctx.request.body)
    const dbBack = await userModel.save()
    ctx.body = dbBack
}

module.exports.index = async ctx => {
    var user = await User.findById(ctx.params.userId)
    ctx.body = user
}