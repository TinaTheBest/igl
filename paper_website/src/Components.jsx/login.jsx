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
        <div className="w-1/2 bg-[#D4E6FF] h-screen flex justify-center items-center">
          <img src={Logo} alt="Logo" className="w-[204px] h-[133.31px]" />
        </div>
        <div className="bg-white w-1/2 flex flex-col justify-center">
          <form className="mx-[50px]  bg-white p-4">
            <h2 className="text-4xl font-bold py-6">Welcome Back!</h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 rounded-[12.5px] " type="text" />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex justify-between">
                <label>Password</label>
                <p className="font-bold text-[#0C2A92] text-[12.005px]">
                  forgot password
                </p>
              </div>
              <input className="border p-2 rounded-[12.5px]" type="password" />
            </div>
            <button className="border w-full my-5 py-2 rounded-[12.5px] bg-[#1B9DF0] hover:bg-indigo-500 text-white">
              Login
            </button>
            <div className="text-center">
              Don't have an account ?{" "}
              <span className="text-[#0F3DDE]">Sign up</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
