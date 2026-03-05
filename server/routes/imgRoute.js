import express from 'express'
import upload from '../middleware/imgMiddleware.js'
import { getImg, imageAdd } from '../controllers/imgControllers.js'


const route = express.Router()

route.post("/uploadImg", upload.single("image"), imageAdd)

route.get("/getImageData",getImg)

export default route

// http://localhost:5000/api/img/uploadImg
// http://localhost:5000/api/img/getImageData