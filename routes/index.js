
let memoryRouter = require('./memoryRouter');

let combineRouters = require('koa-combine-routers');

module.exports = combineRouters(memoryRouter)
