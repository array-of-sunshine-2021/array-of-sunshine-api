//ContainerForm.js

import {useState , useEffect} from 'react'


const ContainerForm = ({fetchApi}) => {

     const [button , setbutton ] = useState(false)


     useEffect(() => {
          if(button){
               setbutton(true)
          }else{
               setbutton(false)
          }

     } , [fetchApi])
     console.log(fetchApi)

     return(
          <div>
               <label htmlFor="sunInput">Before Sunset</label>
               <input type="radio" name="sunInput" className="sunInput" value ="sunset"/>
          </div>
     )
}

export default ContainerForm; 