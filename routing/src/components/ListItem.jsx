import { useNavigate, useParams } from "react-router-dom"



const ListItem = () => {
  const navigate = useNavigate()
  const params = useParams();
  return (
    <div className=" my-10 flex items-center justify-center flex-col  ">
      <h1 className="text-3xl  text-green-400 ">
        {params.i}
      </h1>
      <button
        className="text-3xl bg-pink-600 px-6 py-4  rounded-full"
        onClick={()=> navigate(-1)}
      >Back</button>

    </div>
  )
}

export default ListItem
