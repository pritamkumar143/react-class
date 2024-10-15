// Nav.jsx
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='bg-pink-400 flex justify-evenly items-center text-2xl h-16'>
            <NavLink
                style={(e) => e.isActive? {textDecoration:'underline'}:{}}
                className={(e) => e.isActive ?  'text-blue-800' : ''}
                to='/'
            >
                Home
            </NavLink>
            <NavLink
                style={(e) => e.isActive ? { textDecoration: 'underline' } : {}}
                className={(e) => e.isActive ? 'text-green-600' : ''}
                to="/about">About</NavLink>
            <NavLink
                style={(e) => e.isActive ? { textDecoration: 'underline' } : {}}
                className={(e) => e.isActive ? 'text-yellow-500' : ''}
                to="/service" >Service</NavLink>
        </div>
    );
};

export default Nav;
