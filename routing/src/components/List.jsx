import { Link, Outlet } from "react-router-dom"

const List = () => {
  return (
    <>
    <div className="flex justify-center items-center gap-6 h-12 bg-green-300 ">
          <Link to='/list/item1' className="list-disc">
          List1</Link>
          <Link to='/list/item2'>
          List2</Link>
          <Link to='/list/item3'>
          List3</Link>

      
      </div>
      <hr className="h-[2px] bg-pink-400 border-none "  />
      <Outlet />
      </>
  )
}

export default List
