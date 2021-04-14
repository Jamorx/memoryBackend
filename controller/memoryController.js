class MemoryController {
    get(ctx, next) {
        ctx.body = 'memory'
    }
    update (ctx, next ){
        ctx.body = '修改'
    }
    insert (ctx, next) {
        ctx.body = '插入'
    }
    delete (ctx, next) {
        ctx.body = '删除'
    }
}

module.exports = MemoryController
