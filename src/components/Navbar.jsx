import { useState } from "react"; 
import { Menu, X, Search, ShoppingCart, User, User2, User2Icon, UserCircle } from "lucide-react"; 
 
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
 
  return ( 
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F7E6CA] shadow-md"> 
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> 
        {/* Logo / Brand */} 
      <a href="#home" className="text-2xl font-bold text-yellow-900 cursor-pointer">
        GOOD<br />CHIPS
      </a>
        {/* Desktop Menu */} 
        <div className="hidden md:flex items-center space-x-4"> 
          {/* Search Field */}
          <div className="relative">
            <input
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[232px] h-[24px] px-4 py-2 bg-transparent border-2 border-[#3C3C3C] rounded-full focus:outline-none focus:border-yellow-700 text-yellow-700"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3C3C3C] hover:border-yellow-700  w-5 h-5" />
          </div>
          
          {/* Account Icon */}
          <a href="#account" className="text-[#3C3C3C] hover:text-yellow-700 transition p-2">
            <UserCircle size={22} strokeWidth={1.5} />
          </a>
          
          {/* Cart Icon */}
          <a href="#cart" className="text-[#3C3C3C] hover:text-yellow-700 transition p-2">
            <ShoppingCart size={22} strokeWidth={1.5} />
          </a>
        </div>
 
        {/* Mobile Hamburger */} 
        <button 
          className="md:hidden text-yellow-900" 
          onClick={() => setIsOpen(!isOpen)} 
        > 
          {isOpen ? <X size={28} /> : <Menu size={28} />} 
        </button> 
      </div> 
 
      {/* Mobile Menu Dropdown */} 
      {isOpen && ( 
        <div className="md:hidden bg-[#F7E6CA] shadow-lg"> 
          <div className="flex flex-col items-center py-4 space-y-4"> 
            {/* Mobile Search Field */}
            <div className="relative w-4/5">
              <input
                type="text"
                placeholder=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border-2 border-yellow-900 rounded-full focus:outline-none focus:border-yellow-700 text-yellow-900"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="flex space-x-8 pt-2">
              <a 
                href="#account" 
                className="text-yellow-900 hover:text-yellow-700 transition p-2"
                onClick={() => setIsOpen(false)}
              >
                <User size={22} strokeWidth={1.5} />
              </a>
              
              <a 
                href="#cart" 
                className="text-yellow-900 hover:text-yellow-700 transition p-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div> 
      )} 
    </nav> 
  ); 
}; 
 
export default Navbar;