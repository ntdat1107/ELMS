import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import myCourseRoutes from "./routes/myCourseRoute.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js"
import { errorHandle, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running");
});

app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mycourses", myCourseRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/lessons", lessonRoutes)
app.use(notFound);
app.use(errorHandle);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`.yellow.bold));

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
