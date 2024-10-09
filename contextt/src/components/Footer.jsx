import { useContext } from "react"
import { Datacontext } from "../context/DataContext"


const Footer = () => {
    const [data,setdata]= useContext(Datacontext)
  return (
      <div>
          <h1>Footer:{data}
          </h1>
    </div>
  )
}

export default Footer