const mongoose = require('mongoose')
const moment = require('moment')

// const conn = mongoose.createConnection('mongodb://jamorx:haohaode1@119.28.56.232:27017/memory', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })

const conn = mongoose.createConnection('mongodb://zsq:555666@119.28.56.232:27017/zsqWork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
conn.on('open', function (res) {
    console.log('open成功！',  res)
})

conn.on('error', function (err) {
    console.log('失败！',  err)
})

module.exports = conn;


// (async ()=> {
//     try {
        // 1、增加, 往班级增加一个学生
        // let r = await Student.create({ username: 'AAA', hobby:'游泳'})

        // 2、创建一个学术丢到班级里
        // await new Student({username:'zs'}).save()

        // 3、更新
        // await Student.updateOne({username:'zs'}, {age:20})  // 默认增加属性

        // 4、查询
        // let r = await Student.findById('60560240279bb33c09733490')
        // moment.locale('zh-cn')  // 转化为中文
        // console.log(r, moment(r.birthDay).format('MMMM Do YYYY, hh:mm:ss a'))   //三月 20日 2021, 10:10:08 晚上
        // console.log(moment(1616251001380).format('MMMM Do YYYY, hh:mm:ss a'))   //三月 20日 2021, 10:10:08 晚上

        // 5、删除
        // let r = await Student.deleteOne({id:'60560240279bb33c09733490'})

        // 6、分页查询
        // let arr = [];
        // for (let i = 0; i < 20; i++) {
        //     arr.push({username: 'zs' + i, age:i})
        // }
        // await Student.create(arr)
//         const limit = 2;    // 每页显示两条
//         const currentPage = 2;  // 当前第二页
//         let r = await Student.find({}).limit(limit).skip((currentPage - 1)*limit).sort({age:1})
//         console.log(r)
//     } catch (e) {
//         console.log('e',e)
//     }
// })();

// conn.get()
