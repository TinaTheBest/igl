import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/Authentification/login', formData);

      // Check the status in the response
      if (response.data.status === 'user') {
        // Redirect to '/home' if the status is 'user'
        console.log(response.data.id)
        navigate('/UserFirstPage/' + response.data.id, {
          state: { user_id: response.data.id },
        });
      } else {
        if (response.data.status === 'moderateur') {
          // Redirect to '/home' if the status is 'user'
          navigate('/ModeratorFirstPage');
        } else if (response.data.status === 'Admin') navigate("/AdminFirstPage")
        // Display error message if status is not 'user'
        else setErrorMessage('This Account does not exist. Check your information.');
      }

      // Handle the response, e.g., redirect to a new page, update state, etc.
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle error and display error message
      setErrorMessage('An error occurred during login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/Authentification/reset_pass', { email: formData.email });
      console.log('mail envoyee:', response.data);
    } catch (error) {
      // Handle error and display error message
      setErrorMessage('An error occurred during the reset of password. Please try again.');
      console.error('Error :', error);
    }

  };

  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          }
        `}
      </style>
      <div className="flex justify-between font-dm-sans">
        <div className="w-1/2 bg-[#D4E6FF] h-screen sm:flex hidden justify-center items-center">
          <img src={Logo} alt="Logo" className="w-[204px] h-[133.31px]" />
        </div>
        <div className="bg-white w-full h-screen sm:w-1/2 flex flex-col justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="sm:hidden w-[86px] h-[57px] fixed top-[10px] left-[10px]"
          />
          <form className="sm:mx-[50px] mx-[10px] bg-white p-4" onSubmit={handleFormSubmit}>
            <h2 className="sm:text-4xl text-[22px] font-bold sm:pt-3 sm:pb-6 py-[2px]">
              Welcome Back!
            </h2>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                className="border p-2 rounded-[12.5px]"
                type="text"
                name='email'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex justify-between">
                <label>Password</label>
                <p
                  className="font-bold text-[#0C2A92] text-[12.005px] hover:text-[#0F3DDE] cursor-pointer"
                  onClick={openModal}
                >
                  forgot password
                </p>
              </div>
              <input
                className="border p-2 rounded-[12.5px]"
                type="password"
                name='password'
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="border w-full my-[20px] py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-opacity-90 text-white"
            >
              Login
            </button>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/PageSignUp" className="text-[#0F3DDE] hover:text-[#0C2A92]">Sign up</Link>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Forgot Password?</h2>
            <p className="text-gray-700 mb-4">
              We'll send you a password reset to your registered email address.
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
              onClick={() => { ResetPassword(); closeModal() }}
            >
              Confirm
            </button>
            <button
              className="border border-gray-500 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;


