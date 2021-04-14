const mongoose = require('mongoose')
const conn = require('../dataBase/index.js')

const HomeWorkSchema = mongoose.Schema({
    title: String,
    content: String,
    studentId: {
        ref: "Student", // 外键
        type: mongoose.SchemaTypes.ObjectId
    }
}, {
    timestamps: {
        createAt: 'createTime',
        updatedAt: 'updateTime'
    }
})

module.exports = conn.model('HomeWork', HomeWorkSchema, 'homework');
