
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-salon-darkgray border-t border-salon-gold/20">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-playfair font-bold text-white">
                SMART<span className="text-salon-gold">&</span>WHITE
              </span>
              <span className="block text-sm text-salon-gold tracking-widest">
                HAIR SALON & SPA FOR MENS
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Experience premium men's grooming services in a luxurious environment.
              Our skilled professionals use only the highest quality products to ensure
              you look and feel your absolute best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-salon-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-salon-gold transition-all duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-salon-gold transition-all duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-salon-gold transition-all duration-300">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-salon-gold transition-all duration-300">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-salon-gold transition-all duration-300">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-salon-gold transition-all duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-salon-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-salon-gold mr-3 mt-1" />
                <span className="text-gray-300">Madurai mandapam road santhaikadai, Paramakudi, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-salon-gold mr-3" />
                <a href="tel:+918870076219" className="text-gray-300 hover:text-salon-gold transition-all duration-300">+91 88700 76219</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-salon-gold mr-3" />
                <a href="mailto:amuthan38@gmail.com" className="text-gray-300 hover:text-salon-gold transition-all duration-300">amuthan38@gmail.com</a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-200 mb-3">Business Hours</h4>
              <p className="text-gray-300">Monday - Sunday: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SMART & WHITE Hair Salon & Spa for Mens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
