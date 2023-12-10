import React, {useState} from 'react'
import UseFormfields from './UseFormfields'

export default function Form() {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

  const {fileds,handleChange} = UseFormfields({
    email: '',
    password: ''
  })

  return (
    <form className='form'>
        <div className='form-group'>
            <label htmlFor="email"> Email Address</label>
            <input 
            value={fileds.email}
            onChange={handleChange}
                name='email'
                type='email'
                className='form-control' />
        </div>
        <div className='form-group'>
            <label htmlFor="email"> Passworld </label>
            <input 
            value={fileds.password}
            onChange={handleChange}
                name='password'
                type='password'
                className='form-control' />
        </div>

        <button type='submit' class='btn btn-info'>Submit</button>

    </form>
  )
}
