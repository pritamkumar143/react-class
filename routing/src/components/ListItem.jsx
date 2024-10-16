import { useNavigate, useParams } from "react-router-dom"



const ListItem = () => {
  const navigate = useNavigate()
  const params = useParams();
  return (
    <div>
      <h1>
        {params.i}
      </h1>
      <button
        className="text-2xl bg-pink-600 px-2 py-2 "
        onClick={()=> navigate(-1)}
      >Back</button>

    </div>
  )
}

export default ListItem
