import './Styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {apiDomain} from '../utils'
import Axios from 'axios'
import { useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function Login() {
  const navigate = useNavigate()
  const Schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string().required("password is required"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //   "Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      // )
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const SendDataToServer = async (data) => {
    Axios.post(`${apiDomain}/auth/login`, data)
    .then(({data}) => {
      if(data.token) {
        // dispatch({type: "LOGIN_SUCCESS", payload: data})
        

      }
    })
    .catch(({response}) => {
      const error = response.data.message;
      toast.error(error);
    });
    toast.success("Logged in successfully");
    navigate('/')
  
  };
  return (
    <div>
      <section className='form-bg'>
      <div className='form-box'>
        <form className='form form-login' onSubmit={handleSubmit(SendDataToServer)}>
          <span className='form-title'>Login</span>
          <div className ='form-container'>
            <div className='input-group'>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' className= 'input' placeholder="Full Name"  {...register("username")} />
            {errors.username && toast.error(errors.username?.message)}
            </div>
            <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' className='input'  placeholder="Password" {...register("password")} />
            {errors.password && toast.error(errors.password?.message)}
            </div>
            
          </div>
          <p className='reset'> <Link to="/"> Forgot Password?</Link> </p>
          <button>Login</button>
        </form>
        <div className="form-section login">
          <p>Don`t Have an account? <Link to='/signUp'>SignUp</Link> </p>
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default Login
