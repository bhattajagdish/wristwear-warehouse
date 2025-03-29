
import { 
  Badge,
  Clock4,
  Heart,
  Phone, 
  Droplets,
  Sparkles,
  MapPin
} from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Smartwatches?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our smartwatches are packed with features that combine technology, 
            style, and functionality to enhance your everyday life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <Badge className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-300">
              Crafted with high-quality materials for durability, comfort, and style that lasts.
            </p>
          </div>
          
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <Clock4 className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Long Battery Life</h3>
            <p className="text-gray-300">
              Extended battery life ensures your watch stays powered throughout your day and beyond.
            </p>
          </div>
          
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <Heart className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Health Monitoring</h3>
            <p className="text-gray-300">
              Advanced sensors track your health metrics to help you maintain a balanced lifestyle.
            </p>
          </div>
          
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <Phone className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Connectivity</h3>
            <p className="text-gray-300">
              Seamlessly connect to your smartphone for notifications, calls, and apps.
            </p>
          </div>
          
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <Droplets className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Water Resistant</h3>
            <p className="text-gray-300">
              Designed to withstand water exposure, perfect for workouts and daily activities.
            </p>
          </div>
          
          <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
              <MapPin className="h-8 w-8 text-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-3">GPS Tracking</h3>
            <p className="text-gray-300">
              Built-in GPS for accurate tracking of your routes, distance, and location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
