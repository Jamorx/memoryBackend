

const MemoryController = require('../controller/memoryController.js')

let Router = require('koa-router')
let memoryController = new MemoryController();

const router = new Router({prefix: '/memory'})

router.get('/get', memoryController.get)

router.get('/update', memoryController.update)

router.get('/insert', memoryController.insert)

router.get('/delete', memoryController.delete)

module.exports = router;
