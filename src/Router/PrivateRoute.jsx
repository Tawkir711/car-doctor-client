import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <img className='mx-auto' src="https://i.postimg.cc/wjdrBWc1/365923266-310060981587089-6038640626746651061-n.gif" alt="" />
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;