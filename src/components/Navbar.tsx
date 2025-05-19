
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

// Import custom logo
import logo from '/lovable-uploads/c16ee8f1-b8ef-426a-b726-108a9bbd6216.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-salon-black/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent'
      )}
    >
      <div className="page-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative flex items-center">
            <img src={logo} alt="SMART & WHITE" className="h-12 md:h-14" />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-wider transition-all duration-300 hover:text-salon-gold relative group",
                location.pathname === link.path ? "text-salon-gold" : "text-white"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-0 h-[1px] bg-salon-gold transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )}
              />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 text-salon-gold" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-salon-black/95 flex flex-col items-center justify-center z-40 transition-all duration-500 md:hidden",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl font-medium tracking-wider transition-all duration-300 hover:text-salon-gold",
                location.pathname === link.path ? "text-salon-gold" : "text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
