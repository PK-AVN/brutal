import Image from "next/image";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  // const session = await getServerSession(authOptions);

  return (
    <header className="p-4 sm:p-8 h-3 bg-teal-700 py-4 shadow-md flex items-center justify-between text-white">
      <h1 className="text-base sm:text-lg">Brutal</h1>
      <div className="flex items-center justify-center w-full md:w-auto">
        <Image src="" alt="app-logo" />
      </div>

      {/* <nav className="hidden lg:flex space-x-8"> */}
      <nav className="hidden">
        <a href="#" className="hover:text-teal-300">
          Menu 1
        </a>
        <a href="#" className="hover:text-teal-300">
          Menu 2
        </a>
        <a href="#" className="hover:text-teal-300">
          Menu 3
        </a>
      </nav>

      <HeaderClient />

      {/* <div className=" hidden md:flex space-x-4">
        <button className="bg-transparent hover:bg-white text-white hover:text-teal-600 font-semibold py-2 px-4 border border-white rounded">
          Log in
        </button>
        <button
          className="bg-white text-teal-600 font-semibold py-2 px-4 rounded hover:bg-teal-500 hover:text-white"
          onClick={handleGetStarted}
        >
          Get started
        </button>
      </div> */}
    </header>
  );
};

export default Header;
