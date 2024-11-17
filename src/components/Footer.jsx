const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        {/* Logo or Brand Name */}
        <div className="text-lg font-bold">
          Mr. MMS
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mr. MMS All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
