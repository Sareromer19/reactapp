import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate =useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if( errors.email === "" && errors.password === "") {
          axios.post('http://localhost:8081/login', values)
          .then(res => {
             if(res.data === "Success") {
              navigate('/Shop');
             } else {
              alert("No record existed");
             }

          })
          .catch(err => console.log(err));
      }
    }
  return (
    <div className='d-flex justify-content-center align-items-center align-items-center bg-transparent vh-100'>
      <div className='bg-transparent  p.3 rounded rounded '>
      <h2>Sign-in Account</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='relative my-4'>
               <label htmlFor="email"><strong>Email</strong></label>
               <input type="email" placeholder='Enter Email' name='email'
               onChange={handleInput} className='form-control rounded-0'/>
               {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
               <label htmlFor='password'><strong>Password</strong></label>
               <input type='password' placeholder='Enter Password' name='password'
               onChange={handleInput} className='form-control rounded-0'/>
               {errors.password && <span className='text-danger'>{errors.password}</span>}
         </div>
         <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
         <p>You are agree to our terms and policies</p>
         <Link to="/Signup" className='btn btn-default border w-100 bg-light-rounded-0 text-decoration-none'>Create Account</Link>
      </form>
    </div>
</div>
  )
}

export default Login