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
        <div className="w-1/2 bg-[#D4E6FF] h-screen flex justify-center items-center">
          <img src={Logo} alt="Logo" className="w-[204px] h-[133.31px]" />
        </div>
        <div className="bg-white w-1/2 flex flex-col justify-center">
          <form className="mx-[50px]  bg-white p-4">
            <h2 className="text-4xl font-bold pt-3 pb-6">Get Started Now!</h2>
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
            <p className="flex items-center my-[10px]">
              <input className="mr-2" type="checkbox" />
              Terms and Conditions
            </p>
            <button className="border w-full my-5 py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-indigo-500 text-white">
              Sign Up
            </button>
            <div className="text-center">
              Have an account? ? <span className="text-[#0F3DDE]">Sign In</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
