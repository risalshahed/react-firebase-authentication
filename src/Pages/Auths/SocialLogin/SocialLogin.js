import React from 'react';
import google from '../../../images/social/google-logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/checkout";

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error?.message}</p>
      </div>
    );
  }

  if(loading) {
    return <Loading />
  }

  if(user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className='my-4 d-flex align-items-center'>
        <div className='bg-primary w-50' style={{height: '1px'}}></div>
        <p className='mt-3 px-2'>OR</p>
        <div className='bg-primary w-50' style={{height: '1px'}}></div>
      </div>
      
      {/* display error message if exists */}
      { errorElement }
      
      <div>
        <button onClick={ () => signInWithGoogle() }
        className='bg-info w-50 d-block mx-auto border border-0 p-2 my-3 rounded'>
          <img src={google} alt="" />
          <span className='px-2'>Google Login</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;