import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to MYSQL-Sandbox!</h1>
      <button onClick={() => navigate('/sign-in')} className="btn btn-primary">
        New Database Sandbox
      </button>

    </div>
  )
}

export default Home
