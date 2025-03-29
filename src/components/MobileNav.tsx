
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-6 pt-6">
      <Link 
        to="/" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        Home
      </Link>
      <Link 
        to="/products" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        Shop
      </Link>
      <Link 
        to="/collections" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        Collections
      </Link>
      <Link 
        to="/portfolio" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        Portfolio
      </Link>
      <Link 
        to="/about" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        About
      </Link>
      <Link 
        to="/privacy" 
        className="text-xl font-semibold text-navy hover:text-teal transition-colors"
      >
        Privacy Policy
      </Link>
    </div>
  );
};

export default MobileNav;
