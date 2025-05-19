
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-salon-black">
      <div className="text-center px-4">
        <h1 className="text-9xl font-playfair font-bold text-salon-gold mb-4">404</h1>
        <div className="w-16 h-1 bg-salon-gold mx-auto mb-6"></div>
        <p className="text-2xl text-white mb-8">Page Not Found</p>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn-primary py-3 px-8 rounded-md inline-flex items-center"
        >
          <span>Return to Home</span>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
