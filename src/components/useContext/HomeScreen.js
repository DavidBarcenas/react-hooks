import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  const context = useContext(UserContext)
  console.log(context)

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr/>
    </div>
  )
}
