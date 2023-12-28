import Logo from "../assets/logo.svg";
function Login() {
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
          <form className="sm:mx-[50px] mx-[10px]  bg-white p-4">
            <h2 className="sm:text-4xl text-[22px] font-bold sm:pt-3 sm:pb-6 py-[2px]">
              Welcome Back!
            </h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 rounded-[12.5px] " type="text" />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex justify-between">
                <label>Password</label>
                <p className="font-bold text-[#0C2A92] text-[12.005px] hover:text-[#0F3DDE] ">
                  forgot password
                </p>
              </div>
              <input className="border p-2 rounded-[12.5px]" type="password" />
            </div>
            <button className="border w-full my-[20px] py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-opacity-90 text-white">
              Login
            </button>
            <div className="text-center">
              Don't have an account ?{" "}
              <span className="text-[#0F3DDE] hover:text-[#0C2A92]">
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
