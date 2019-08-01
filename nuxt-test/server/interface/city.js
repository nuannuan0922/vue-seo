const Router = require('koa-router')

let router = new Router({
  prefix: '/city'
})

router.get('/list', async(cxt) => {
  cxt.body = ['北京', '天津']
})

module.exports = router