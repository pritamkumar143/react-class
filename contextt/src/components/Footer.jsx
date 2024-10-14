import { useContext } from "react"
import { Xyz } from "../context/DataContext"


const Footer = () => {
    const [data,setdata]= useContext(Xyz)
  return (
      <div>
          <h1>Footer:{data}
          </h1>
    </div>
  )
}

export default Footer