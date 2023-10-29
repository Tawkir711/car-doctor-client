import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const hello = { email, password }
    console.log(hello);
    signIn(email, password)
      .then(result => {
        if (result.user) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Your Login Successfully",
          
        });
        }
        const user = { email };
        
        
        // get access token 
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true})
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
        })
      })
      .catch(error => {
        if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
         
        });
      }
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-12 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] text-white hover:bg-orange-600"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className='my-4 text-center'>
            New to Car Doctors{" "}
            <Link className="text-[#FF3811] font-bold " to={"/signUp"}>
              SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;