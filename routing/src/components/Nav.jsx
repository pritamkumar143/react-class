// Nav.jsx
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
       <div className='bg-pink-400 flex justify-evenly items-center text-2xl h-16'>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
            <Link to="/service" className="text-white hover:text-gray-400">Service</Link>
        </div>
    );
};

export default Nav;
