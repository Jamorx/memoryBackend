

const MemoryController = require('../controller/memoryController.js')

let Router = require('koa-router')
let memoryController = new MemoryController();

const router = new Router({prefix: '/memory'})

router.get('/get', memoryController.get)

router.get('/list', memoryController.list)

module.exports = router;
