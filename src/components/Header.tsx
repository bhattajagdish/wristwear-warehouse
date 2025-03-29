
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-navy">
              WristWear
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-teal transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-teal transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal transition-colors">
              About
            </Link>
          </nav>

          {/* Search, Cart & Mobile Menu Buttons */}
          <div className="flex items-center space-x-2">
            {isSearchOpen ? (
              <div className="flex items-center md:w-64 w-full">
                <Input
                  placeholder="Search products..."
                  className="border-gray-200 focus:border-teal"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <CartSheet />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
