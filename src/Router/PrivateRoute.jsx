import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <img className='mx-auto' src="https://i.postimg.cc/wjdrBWc1/365923266-310060981587089-6038640626746651061-n.gif" alt="" />
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;