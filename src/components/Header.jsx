import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div>
      <nav className=" flex justify-between p-5 bg-blue-400 text-white font-medium">
        <div className="hidden md:block">Dynamic Forms</div>
        <ul
          className=" flex gap-4 justify-center items-center w-full md:w-auto"
          data-aos="fade-down"
        >
          <li>
            <a href="#" className=" hover:underline hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
