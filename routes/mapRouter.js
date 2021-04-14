

const MapController = require('../controller/mapController.js')

let Router = require('koa-router')
let mapController = new MapController();

const router = new Router({prefix: '/map'})

router.get('/get', mapController.get)

router.get('/list', mapController.list)

module.exports = router;
