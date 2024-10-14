import { createContext, useState } from "react"

export const Xyz = createContext(null)


const DataContext = (props) => {
  const [data, setData] = useState('this is a data context')
  return (
    
    <Xyz.Provider value={[data,setData]}>
      {props.children}
    </Xyz.Provider>
  )
}

export default DataContext