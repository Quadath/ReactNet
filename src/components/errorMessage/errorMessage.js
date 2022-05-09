import React from "react";
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src='https://safebytes.com/wp-content/uploads/2016/11/error-hi.png' alt='error'></img>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img> */}
            <span>Something went wrong</span>
        </>
    )
}

export default ErrorMessage