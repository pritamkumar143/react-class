import { Link } from "react-router-dom"

const List = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-green-300 ">
          <Link to='/list/item1' className="list-disc">
          List1</Link>
          <Link to='/list/item2'>
          List2</Link>
          <Link to='/list/item3'>
          List3</Link>
    </div>
  )
}

export default List
