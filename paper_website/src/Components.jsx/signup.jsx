import { useState } from "react";
import Logo from "../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
/**
 * Composant de la page d'inscription.
 * @returns {JSX.Element} Composant de la page d'inscription.
 */
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Signin, setSignin] = useState("");

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate if the password matches the confirmation password
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      setPasswordsMatch(false); // Set state to indicate passwords don't match
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError("Invalid email address");
      return;
    }

    if (!validatePassword(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    axios.post(
      "http://localhost:5000/Authentification/sginin",
      formData
    ).then(response => {
      if (response.data.auth) {
        setSignin("");
        navigate("/UserFirstPage/" + response.data.id, {
          state: { user_id: response.data.id },
        });
        console.log("yyyaaaaaw hna navigate");
        console.log("SignUp successful:", response.data);
      } else {
        setSignin(response.data.message);
      }
    }).catch(error => {
      console.error("Error during Sign Up:", error);
      // Gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
    });

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
        <div className="bg-white w-full sm:w-1/2 flex flex-col justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="sm:hidden w-[86px] h-[57px] ml-[10px] mt-[10px]"
          />
          <form
            className="sm:mx-[50px] mx-[10px]  bg-white p-4"
            onSubmit={handleFormSubmit}
          >
            <h2 className="sm:text-4xl text-[22px] font-bold sm:pt-3 sm:pb-6 py-[2px]">
              Get Started Now!
            </h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                className="border p-2 rounded-[12.5px] "
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Email address</label>
              <input
                className={`border p-2 rounded-[12.5px] ${emailError ? "border-red-500" : ""
                  }`}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className={`border p-2 rounded-[12.5px] ${passwordError ? "border-red-500" : ""
                  }`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label>Confirm password</label>
              <input
                className="border p-2 rounded-[12.5px]"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="border w-full my-[5px] py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-opacity-90 text-white"
            >
              Sign Up
            </button>
            <div className="text-center">
              Have an account?{" "}
              <Link
                to="/PageLogin"
                className="text-[#0F3DDE] hover:text-[#0C2A92]"
              >
                Sign In
              </Link>
            </div>
          </form>
          {!passwordsMatch && (
            <p className="text-red-500 text-center">Passwords don't match.</p>
          )}
          <p className="text-red-500 text-center">{Signin}</p>

        </div>
      </div>
    </>
  );
}

export default SignUp;
