
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2670&auto=format&fit=crop"
          alt="Smart watch on wrist"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Future On Your Wrist
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover our collection of premium smartwatches that combine
            cutting-edge technology with elegant design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-teal hover:bg-teal/90 text-white px-8 py-6">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6">
              <Link to="/collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
