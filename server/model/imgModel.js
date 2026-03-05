import mongoose from 'mongoose'

const imgSchema = new mongoose.Schema({
    name:String,
    image:String,
},{timestamps:true})


const imageuploadmodel = mongoose.model("imgAdd",imgSchema)

export default imageuploadmodel