const mongoose = require('mongoose')
const conn = require('../dataBase/index.js')

const StudentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    age: {
        type: Number,
        min: 5,
        max: 150
    },
    birthDay: {
        type: Date,
        default: Date.now
    },
    hobby: {
        type: String,
        validate(value) {
            return value === '游泳' || value === '跑步'
        }
    }
}, {
    timestamps: {
        createAt: 'createTime',
        updatedAt: 'updateTime'
    }
})
// 静态方法
StudentSchema.statics.findByName = function (username) {
    return this.findOne({username})
}
// 实例方法
StudentSchema.methods.findByName = function (username) {
    return this.model('Student').findOne(username)
}

module.exports = conn.model('Student', StudentSchema, 'student');
