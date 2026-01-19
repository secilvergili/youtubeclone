import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";


const Header = () => {
  return (
    <div className="flex justify-between gap-4 px-4 h-14">
      {/* Logo Left Header  */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-grey rounded-full transition duration-200">
        <MdMenu className="text-xl md:text-2xl"/>
        </button>


      <button className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">YouTube</span>
      </button>
      </div>

      {/* Middle Header Arama */}

      <div className="flex-1 max-w-[728px] mx-8 flex justify-center items-center">
        <form className="flex w-full max-w-[640px] items-center">
          <div className="flex flex-1">
            <input 
            type="text" 
            className="w-full h-10 px-4 bg-[#121212] border border-zinc-700 rounded-l-full text-white placeholder:text-[#aaaaaa] focus:border-grey outline-none"
            placeholder="Ara"
            />
            <button className="w-16 h-10 bg-[#121212] border border-zinc-700 rounded-r-full flex justify-center items-center hover:bg-grey transition">
              <CiSearch className="text-xl text-white"/>
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey transition rounded-full max-sm:hidden">
            <MdMic className="text-white"/>
            </button>
        </form>
      </div>

      {/*Rights: Icons*/}
      <div className="flex item-center gap-2 ">
        <button className="icon max-sm:hidden">
          <IoIosVideocam className="text-xl"/>
          </button>
        <button className="icon">
          <MdApps className="text-xl"/>
          </button>
        <button className="icon relative">
          <FaBell className="text-xl"/>

          <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full size-5 grid place-items-center font-bold">3</span>
        </button>
        <button className="icon">
          <RiAccountCircleLine className="text-xl"/>
          </button>
      </div>
    </div>
  );
};

export default Header;
