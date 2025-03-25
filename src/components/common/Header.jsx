import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold font-full">SHILPAM PSC</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CiMenuBurger /> : <CiMenuBurger />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-600 md:bg-transparent md:static md:w-auto md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 font-full hover:underline hover:text-yellow-300 duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/questions"
                className="block py-2 font-full px-4 hover:underline hover:text-yellow-300 duration-500"
              >
                Questions
              </Link>
            </li>
            <li>
              <Link
                to="/mock-exam"
                className="block py-2 font-full px-4 hover:underline hover:text-yellow-300 duration-500"
              >
                Mock Exam
              </Link>
            </li>
            <li>
              <Link
                to="/bookmarks"
                className="block py-2 font-full px-4 hover:underline hover:text-yellow-300 duration-500"
              >
                Bookmarks
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 font-full px-4 hover:underline hover:text-yellow-300 duration-500"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className="block py-2 font-full px-4 hover:underline font-bold text-yellow-300 hover:text-white duration-500"
              >
                Statistics
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
