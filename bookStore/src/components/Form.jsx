import React from 'react'
import {useForm} from 'react-hook-form'
import style from './st.module.css'
import { Link, NavLink } from 'react-router-dom'

const Form = () => {
    const {register, handleSubmit , formState:{errors},watch}  = useForm();

    console.log(errors);

    const password = watch('password');
    const repassword = watch('repassword');
  
    const passwordMatch = (value) => value === password || 'Passwords do not match.';
  
  
    function onSubmit(data){
      console.log(data);
    }

    function handleReset(){
        location.reload()
    }
  
    return (
      <div>
        <div className={style.sk}>
          <NavLink to='/' className={style.mn}>Kalvium <span className={style.al}>Books</span></NavLink>
        </div>
        <div className={style.main}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Create Account</h1>
              <input
            className={style.in}
            type="text"
            placeholder="Name"
            {...register('Name', {
              required: 'Name is required.',
              minLength: {
                value: 3,
                message: 'Name should be at least 3 characters.',
              },
              maxLength: {
                value: 30,
                message: 'Name should be at most 30 characters.',
              },
            })}
          />
          <span className={style.mes}>{errors.Name?.message}</span>  
          <br />
        
          <input className={style.in} type="email" placeholder='Email ID'  {...register('emailID' , {required:"Email is required.", pattern:/^\S+@\S+\.\S+$/} )}/>
          <span className={style.mes}>{errors.emailID?.message}</span>
            
          <input className={style.in} type="password" placeholder='Password'  {...register('password' , {required:'Password is Required',
              minLength : {
                value:10,
                message:"Password should be atleat 10 characters and should contain special character"
              }
          })}/><br/>
          <span className={style.mes}>{errors.password?.message}</span>
            
          <input className={style.in} type="password" placeholder='Repeat your password' {...register('repassword', { required: 'Repeat Password  is Required',
            validate: passwordMatch,})}/><br/>
          <span className={style.mes}>{errors.repassword?.message}</span>


          <div className={style.buttons}>
                <button type='submit' className={style.but}>Sign Up</button>
                <button type='submit' className={style.buts} onClick={handleReset}>Reset</button>
          </div>

          </form>   


        </div>
      </div>
    )
}

export default Form