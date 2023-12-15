import logo from '../assets/logo.svg';
import account from '../assets/account.svg';
import question from '../assets/icon-question.svg';
import article from '../assets/article.svg';

function NavBar() {
  return (
    <>
          <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', sans-serif;
          }
        `}
      </style>
      <div className='flex items-center m-'>
        <div className='w-24 h-16'>
          <img src={logo} alt="Logo" />
        </div>
        <div className="rounded-md flex justify-between items-center bg-white w-full h-20 mx-4">
          <div className=" ml-[21.16px] flex gap-[28.44px] items-center ">
            <div className="flex items-center gap-[7.11px] border-b-2 py-1 border-blue-500">
              <span><img src={article} alt='Artcile'/></span>
              <span className="font-semibold text-lg leading-normal font-dm-sans">Find articles</span>
            </div>
            <div className="ml-4 font-semibold text-lg leading-normal font-dm-sans text-[#6E6E9B]">My favorite articles</div>
          </div>
          <div className='flex items-center gap-4 mr-[33px] my-[16.9px]'>
            <div className='w-10 h-10'>
              <img src={question} alt="Question" />
            </div>
            <div className='w-10 h-10'>
              <img src={account} alt="Account" />
            </div>
            <div className="flex py-[9px] px-[22px] justify-center items-center rounded-[17px] bg-blue-500 text-white shadow-md m[17]">Logout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
