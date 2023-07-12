import './Styles/SignUp.css'
import {Link, useNavigate} from 'react-router-dom'
import { useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { apiDomain } from '../utils';

function SignUp() {
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string().required("password is required"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //   "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      // ),
    email: yup.string().email("Invalid email").required("Email is required"),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const SendDataToServer = async (data) => {
    const response = await fetch(`${apiDomain}auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status === 200) {
      toast.success("Account created successfully");
      navigate('/login')
    } else {
      toast.error("Account creation failed");
    }


   
 
    

  };

  return (
    <section className='form-bg'>
      <div className='form-box'>
        <form className='form' onSubmit={handleSubmit(SendDataToServer)}>
          <span className='form-title'>Sign up</span>
          <span className='subtitle'>Create a free account with your email.</span>
          <div className ='form-container'>
            <div className='input-group'>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' className= 'input' placeholder="Full Name"  {...register("username")}/>
            {errors.username && toast.error(errors.username?.message)}
            </div>
            <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' className='input'  placeholder="Email" {...register("email")}/>
            {errors.email && toast.error(errors.email?.message)}
            </div>
            <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' className='input'  placeholder="Password" {...register("password")}/>
            {errors.password && toast.error(errors.password?.message)}
            </div>
            <div className='input-group'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className='input'  placeholder="Confirm Password" {...register("confirmPassword")}/>
            {errors.confirmPassword && toast.error(errors.confirmPassword?.message)}
            </div>
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>Have an account? <Link to='/login'>Log in</Link> </p>
        </div>
      </div>
      
    </section>
  )
}

export default SignUp
