import { createContext, useState } from "react"

export const Datacontext = createContext(null)


const DataContext = (props) => {
  const [data, setData] = useState('this is a data context')
  return (
    
    <Datacontext.Provider value={[data,setData]}>
      {props.children}
    </Datacontext.Provider>
  )
}

export default DataContext