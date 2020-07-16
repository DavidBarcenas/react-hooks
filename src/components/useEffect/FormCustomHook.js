import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormCustomHook = () => {

  const [formState, handleChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formState

  const handleSubmit = e=> {
    e.preventDefault()
    console.log(formState)
  }

  return <form className="text-center p-5" onSubmit={handleSubmit}>
    <h1 className="text-primary">useEffect</h1>
    <hr/>

    <div className="form-group">
      <input type="text" className="form-control" name="name" placeholder="Nombre" value={name} onChange={handleChange}/>
      <input type="email" className="form-control" name="email" placeholder="Email" value={email}  onChange={handleChange}/>
      <input type="password" className="form-control" name="password" placeholder="Contraseña" value={password}  onChange={handleChange}/>
    </div>

    <button className="btn btn-success">Enviar</button>
  </form>
}