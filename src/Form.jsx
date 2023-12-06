import React, {useState} from 'react'

export default function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <form className='form'>
        <div className='form-group'>
            <label htmlFor="email"> Email Address</label>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
                name='email'
                type='email'
                className='form-control' />
        </div>
        <div className='form-group'>
            <label htmlFor="email"> Email Address</label>
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                name='password'
                type='password'
                className='form-control' />
        </div>

        <button type='submit' class='btn btn-info'>Submit</button>

    </form>
  )
}
