import React from "react";

const Navbar = () => {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-3xl font-bold text-gray-300">Pagination</span>
        </a>
        <nav className="md:ml-auto  flex flex-wrap items-center text-xl font-bold justify-center">
        
        
        </nav>
       
      </div>
    </header>
  );
};

export default Navbar;
