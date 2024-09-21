const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h2 className="hidden md:text-lg font-semibold mb-2">Company Name</h2>
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-teal-300">
            About
          </a>
          <a href="#" className="hover:text-teal-300">
            Contact
          </a>
          <a href="#" className="hover:text-teal-300">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
