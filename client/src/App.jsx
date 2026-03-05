import { useState, useEffect  } from 'react'
import axios from 'axios'

const App = () => {

 const [name,setName] = useState("")
 const [fileName,setFileName] = useState(null)
 const [userdata,setUserData] = useState([])


 const handleClick = async(e)=>{

   e.preventDefault()
   try {

    const fromData = new FormData()
        
    fromData.append("name",name);
    fromData.append("image",fileName)

    const adding = await axios.post("http://localhost:5000/api/crud/uploaddata",fromData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

    //console.log(adding);

    alert(adding.data.msg)
    fetchdatas()
    
   } catch (error) {

    console.log(error.response.data.msg);
    
   }

 }
 
 const fetchdatas = async()=>{
  const get = await axios.get("http://localhost:5000/api/crud/getdataforimage")
  console.log(get);
  setUserData(get.data.datasend)
 }

  useEffect(()=>{
    (async()=>{
      fetchdatas()
    })()

  },[])

  return (
   <>
   
  <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
  <input type="file"  onChange={(e)=>setFileName(e.target.files[0])} />
  <button onClick={handleClick}>Add</button>
  
  {userdata.map((e)=>(

    <div key={e._id}>
      <h1>{e.name}</h1>
      <img src={`http://localhost:5000/${e.image}`} width={200} alt="" />
    </div>

  ))}

   </>
  )
}

export default App