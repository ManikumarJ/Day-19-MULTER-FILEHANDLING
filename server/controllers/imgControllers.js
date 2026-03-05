
import imageuploadmodel from '../model/imgModel.js'


export const imageAdd = async (req, res) => {

  try {

    // console.log(req.body)
    // console.log(req.file)

    const addingdata = await imageuploadmodel.create({
      name: req.body.name,
      image: req.file.path
    })

    res.status(201).json({ msg: "File Added Successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Something went wrong"})
    }
}


export const getImg = async(req,res)=>{

    const datasend = await imageuploadmodel.find()
    res.status(200).json({datasend})

}