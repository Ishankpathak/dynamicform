const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-4 ">
      <div className=" container text-center mt-3">
        <p className=" text-sm">© 2024 Dynamic Form. All rights reserved.</p>
        <div className=" flex justify-center space-x-4 mt-2">
          <a href="#" className=" textgray-400 hover:text-red-400">
            Privacy Policy
          </a>
          <a href="#" className=" textgray-400 hover:text-red-400">
            Terms of Service
          </a>
          <a href="#" className=" textgray-400 hover:text-red-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
