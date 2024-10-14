import { useContext } from "react";
import { Xyz } from "../context/DataContext.jsx";

const Header = () => {
    const [data, setData] = useContext(Xyz)
    return (
        <div>
            <h1>Header</h1>
            <p>{data}</p>
        </div>
    )
}

export default Header