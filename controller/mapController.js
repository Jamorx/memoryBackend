class MapController {
    async get(ctx, next) {
        ctx.body = '获取地图'
    }
    list(ctx, next) {
        ctx.body = '获取地图列表'
    }
}

module.exports = MapController
