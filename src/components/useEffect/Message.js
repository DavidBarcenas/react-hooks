import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {

    const move = (e) => console.log(e.x, e.y);
    
    window.addEventListener('mousemove', move)

    return () => {
      console.log('unmounted component')
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div>
      <h3>Message</h3>
    </div>
  )
}
