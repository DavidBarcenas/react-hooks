import React, { useEffect,useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState

  useEffect(() => {
    console.log('hey')
  }, [])

  const handleChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return <div className="text-center p-5">
    <h1 className="text-primary">useEffect</h1>
    <hr/>

    <div className="form-group">
      <input type="text" className="form-control" name="name" placeholder="Nombre" value={name} onChange={handleChange}/>
      <input type="email" className="form-control" name="email" placeholder="Email" value={email}  onChange={handleChange}/>
    </div>

    { name === 'dave' && <Message /> }
  </div>
}