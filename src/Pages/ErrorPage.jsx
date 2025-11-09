import React from 'react';
import { Link} from 'react-router';
import noImg from '.././assets/error-404.png'

const ErrorPage = () => {

    
    return (
        <div className=' mt-30 my-20'>
            <div className='flex flex-col justify-center items-center container mx-auto'>
                <img src={noImg} alt="" />
                <div className='flex flex-col justify-center items-center text-center space-y-3 mt-3'>
                    <h4 className='text-4xl font-semibold '>Oops, page not found!</h4>
                    <p className='text-sm text-gray-400'>The page you are looking for is not available.</p>

                    <Link to={'/'}>
                    <button
                        
                        className='btn btn-st'
                        href="">
                        Go Back
                    </button>
                    </Link>
                </div>
            </div>
            </div>
            );
};

            export default ErrorPage;