import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <button className="btn btn-success" 
        onClick={() => setUser({      
          id: 1234,
          name: 'Daveepro',
          email: 'daveepro@outook.com'})}
          >Login</button>
    </div>
  )
}
