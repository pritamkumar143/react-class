import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    console.log('App.jsx mounted');

    return () => {
      console.log('App.jsx is unmounted');

    }

  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Home
