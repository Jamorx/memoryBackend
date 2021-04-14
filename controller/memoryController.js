class MemoryController {
    get(ctx, next) {
        ctx.body = 'memory'
    }
    list(ctx, next) {
        ctx.body = 'memory list'
    }
}

module.exports = MemoryController
