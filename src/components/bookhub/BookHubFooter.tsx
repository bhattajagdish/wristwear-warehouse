
import { Link } from "react-router-dom";
import { BookOpen, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BookHubFooter = () => {
  return (
    <footer className="bg-[#3E2723] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8" />
              <span className="text-2xl font-serif font-bold">Literati</span>
            </div>
            <p className="text-white/80 mb-6">
              Your destination for literary exploration and discovery.
              Find your next favorite book among our carefully curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/book-hub" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-hub/browse" className="text-white/80 hover:text-white transition-colors">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/book-hub/genres" className="text-white/80 hover:text-white transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link to="/book-hub/authors" className="text-white/80 hover:text-white transition-colors">
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/book-hub/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/book-hub/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/book-hub/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-hub/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/book-hub/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest book releases and reading recommendations.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 focus:border-[#8B5A2B] text-white placeholder:text-white/50"
              />
              <Button className="ml-2 bg-[#8B5A2B] hover:bg-[#6D4C41]">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Literati Book Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default BookHubFooter;
