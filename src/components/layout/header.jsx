
import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSidebar } from "../../context/sidebar-context";



const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex justify-between gap-4 px-4 h-14">
      {/* Logo Sol Header  */}
      <div className="flex items-center gap-[3.75]">
        <button onClick={toggleSidebar} className="p-2 hover:bg-grey rounded-full transition duration-200">
          <MdMenu className="text-xl md:text-2xl"/>
        </button>


      <button className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" width={32} />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">YouTube</span>
      </button>
      </div>

      {/* Orta Header Arama */}

      <div className="flex-1 max-w-180 mx-4 flex justify-center items-center">
        <form className="flex w-full max-w-160 items-center">
          <div className="flex flex-1">
            <input type="text" className="w-full h-10 px-4 bg-[#121212] border border-grey rounded-l-full text-white placeholder:text-[#aaaaaa] focus-border-[#1c62b9] outline-none"
            placeholder="Ara"/>
            <button className="w-16 h-10 bg-[#222222] border border-grey rounded-r-full flex justify-center items-center hover:bg-zinc-700 transition">
              <CiSearch className="text-xl text-white" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey rounded-full max-sm:hidden">
          <MdMic />
          </button>
        </form>
      </div>

      {/*Sol: Icons*/}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam className="text-xl"/>
        </button >
        <button className="icon max-sm:hidden">
        <MdApps className="text-xl"/>
        </button>
        <button className="icon relative">
        <FaBell className="text-xl"/>
        <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full size-5 grid place-items-center font-bold">3</span>
        </button>
        <button className="icon" >
        <RiAccountCircleLine className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
