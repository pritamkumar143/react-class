// Service.jsx
import {useNavigate } from 'react-router-dom'
const Service = () => {
    const navigate = useNavigate()
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log('submiteddd');
        

        navigate('/')
        // navigate(1)

    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
            <h1 className="text-4xl font-bold text-yellow-600">Our Services</h1>
            <p className="mt-4 text-lg">Check out the services we offer.</p>
            <form onSubmit={SubmitHandler}>
                <button className="rounded-full bg-pink-500 p-4">Submit</button>
            </form>
        </div>
    );
};

export default Service;
