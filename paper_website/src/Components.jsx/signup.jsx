import Logo from "../assets/logo.svg";
function SignUp() {
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
          <form className="sm:mx-[50px] mx-[10px]  bg-white p-4">
            <h2 className="sm:text-4xl text-[22px] font-bold sm:pt-3 sm:pb-6 py-[2px]">
              Get Started Now!
            </h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 rounded-[12.5px] " type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Email address</label>
              <input className="border p-2 rounded-[12.5px] " type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>

              <input className="border p-2 rounded-[12.5px]" type="password" />
            </div>
            <div className="flex flex-col py-2">
              <label>Confirm password</label>

              <input className="border p-2 rounded-[12.5px]" type="password" />
            </div>
            <p className="flex items-center my-[5px]">
              <input className="mr-2" type="checkbox" />
              Terms and Conditions
            </p>
            <button className="border w-full my-[5px] py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-opacity-90 text-white">
              Sign Up
            </button>
            <div className="text-center">
              Have an account? ?{" "}
              <span className="text-[#0F3DDE] hover:text-[#0C2A92]">
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
