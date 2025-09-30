import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group cursor-pointer">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5" />
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 style={{ fontFamily: 'Sansation Light, sans-serif' }}">
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-light"
            >
              HOME
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-light"
            >
              PRODUCTS
            </a>
            <a
              href="#latest"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-light"
            >
              LATEST
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-200 font-light">
                BLOGS
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a
                  href="#beauty-tips"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors duration-200"
                >
                  Beauty Tips
                </a>
                <a
                  href="#skincare-guide"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors duration-200"
                >
                  Skincare Guide
                </a>
                <a
                  href="#makeup-trends"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors duration-200"
                >
                  Makeup Trends
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 font-light hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 cursor-pointer">
              Button
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              PRODUCTS
            </a>
            <a
              href="#beauty-tips"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              Beauty Tips
            </a>
            <a
              href="#skincare-guide"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              Skincare Guide
            </a>
            <a
              href="#makeup-trends"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              Makeup Trends
            </a>
            <a
              href="#latest"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              LATEST
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              BLOGS
            </a>
            <button className="w-full text-left bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Shop
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
