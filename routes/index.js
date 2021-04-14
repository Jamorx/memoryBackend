let mapRouter = require('./mapRouter');
let memoryRouter = require('./memoryRouter');

let combineRouters = require('koa-combine-routers');

module.exports = combineRouters(mapRouter, memoryRouter)
