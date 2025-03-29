
import { Link } from "react-router-dom";
import { Search, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BookHubHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8ede3] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/book-hub" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#8B5A2B]" />
            <span className="text-2xl font-serif font-bold tracking-tight text-[#8B5A2B]">Literati</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/book-hub" className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors">
              Home
            </Link>
            <Link to="/book-hub/browse" className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors">
              Browse
            </Link>
            <Link to="/book-hub/genres" className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors">
              Genres
            </Link>
            <Link to="/book-hub/authors" className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors">
              Authors
            </Link>
            <Link to="/book-hub/about" className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input 
                  className="w-64 border-[#8B5A2B] focus:border-[#8B5A2B]" 
                  placeholder="Search for books..." 
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5 text-[#5D4037]" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5 text-[#5D4037]" />
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-[#5D4037]" />
              ) : (
                <Menu className="h-5 w-5 text-[#5D4037]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-[#E1D4C9]">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/book-hub" 
                className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/book-hub/browse" 
                className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                to="/book-hub/genres" 
                className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Genres
              </Link>
              <Link 
                to="/book-hub/authors" 
                className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Authors
              </Link>
              <Link 
                to="/book-hub/about" 
                className="text-[#5D4037] hover:text-[#8B5A2B] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default BookHubHeader;
