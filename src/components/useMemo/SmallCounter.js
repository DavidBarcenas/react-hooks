import React, {memo} from 'react'

export const SmallCounter = memo(({value}) => {
  console.log('render init :(')
  return (
    <small>
      {value}
    </small>
  )
})
