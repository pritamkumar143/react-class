import { useContext } from "react";
import { Datacontext } from "../context/DataContext.jsx";

const Header = () => {
    const [data, setData] = useContext(Datacontext)
    return (
        <div>
            <h1>Header</h1>
            <p>{data}</p>
        </div>
    )
}

export default Header