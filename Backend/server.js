import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import Courses from './data/Courses.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send("Running")
})

app.get('/api/managecourse', (req, res) => {
    res.json(Courses)
})

app.get('/api/managecourse/:id', (req, res) => {
    const courseNow = Courses.find(c => c.fastName == req.params.id)
    res.json(courseNow)
})



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`.yellow.bold))





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