const express = require('express')
const Courses = require('./data/MOCK_DATA_COURSE')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/api/managecourse', (req, res) => {
    res.json(Courses)
})

app.get('/api/managecourse/:id', (req, res) => {
    const courseNow = Courses.find(c => c.fastName == req.params.id)
    res.json(courseNow)
})



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))





// 		               _oo0oo_
//                    o8888888o
//                    88" . "88
//                    (| -_- |)
//                    0\  =  /0
//                  ___/`---'\___
//                .' \|     |// '.
//               / \|||  :  |||// \
//              / _||||| -:- |||||- \
//             |   | \\  -  /// |   |
//             | \_|  ''\---/''  |_/ |
//             \  .-\__  '-'  ___/-. /
//           ___'. .'  /--.--\  `. .'___
//        ."" '<  `.___\_<|>_/___.' >' "".
//       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//       \  \ `_.   \_ __\ /__ _/   .-` /  /
//   =====`-.____`.___ \_____/___.-`___.-'=====
//                     `=---='