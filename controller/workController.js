const Student = require('../models/student');
const HomeWork = require('../models/homeword');

const conn = require('../dataBase/index.js');

(async () => {
    // let student = await Student.create({username:'zf',age:100});
    //
    // let r = await HomeWork.create({title:'今天学mongo',content:'好好学习',studentId:student._id})

    // populate 使用外键关联其他表
    let r = await HomeWork.findById("6060823821c3c5115fcc812c").populate('studentId')

    console.log(r)
})()

console.log('111')