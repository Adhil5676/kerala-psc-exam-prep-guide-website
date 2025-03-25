import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-3 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Shilpam psc guide. All rights
            reserved.
          </p>
          <p>
            Developed With 🤍 by{" "}
            <a
              href="https://www.linkedin.com/in/adhil-cs-255116308"
              className="text-blue-400 hover:underline"
            >
              ADHIL CS
            </a>
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/Adhil5676"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl hover:text-blue-400 duration-500 " />
          </a>
          <a
            href="https://www.instagram.com/_aadhll?igsh=eTQ1MXRpZ3A1MGNp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-600 duration-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/adhil-cs-255116308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-400 duration-500 " />
          </a>
        </div>
      </div>
    </footer>
  );
}
