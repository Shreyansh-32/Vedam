import { MdMenuBook } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full h-auto items-center bg-transparent flex p-12 justify-between">
      <div>
        <h1 className="text-5xl font-semibold">वेदम्</h1>
      </div>
      <div className="flex w-1/2 justify-end gap-10 items-center">
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="किताबें"
            className="w-full bg-[#d6ccc2] h-10 px-4 pr-12 rounded-full border shadow-lg"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Search"
            onClick={() => {
              /* Add your search function here */
            }}
          >
            <MdMenuBook size={24} className="text-gray-700" />
          </button>
        </div>
        <div className="h-10 w-10 border rounded-full p-2 shadow-lg hover:bg-[#d6ccc2] transition-transform cursor-pointer duration-200">
          <FaCartPlus size={24} className="text-gray-700"/>
        </div>
        <a href="#" className="text-xl font-semibold  rounded-full px-8 py-2 border shadow-lg hover:bg-[#d6ccc2] hover:transition-transform hover:duration-1000">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;