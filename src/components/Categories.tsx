
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Activity,
  Watch,
  Timer,
  Briefcase,
  Heart,
  Mountain
} from "lucide-react";

const categories = [
  {
    id: "fitness",
    name: "Fitness Trackers",
    description: "Track your workouts, health metrics, and activity levels",
    icon: <Activity className="h-10 w-10 text-teal" />,
    link: "/category/fitness"
  },
  {
    id: "luxury",
    name: "Luxury Watches",
    description: "Premium designs with advanced smart features",
    icon: <Watch className="h-10 w-10 text-teal" />,
    link: "/category/luxury"
  },
  {
    id: "sport",
    name: "Sport Watches",
    description: "Durable and feature-rich for all your athletic pursuits",
    icon: <Timer className="h-10 w-10 text-teal" />,
    link: "/category/sport"
  },
  {
    id: "business",
    name: "Business Watches",
    description: "Elegant designs for professionals with productivity features",
    icon: <Briefcase className="h-10 w-10 text-teal" />,
    link: "/category/business"
  },
  {
    id: "health",
    name: "Health Monitors",
    description: "Advanced health tracking and early warning systems",
    icon: <Heart className="h-10 w-10 text-teal" />,
    link: "/category/health"
  },
  {
    id: "outdoor",
    name: "Outdoor Watches",
    description: "Rugged, reliable, and ready for adventure",
    icon: <Mountain className="h-10 w-10 text-teal" />,
    link: "/category/outdoor"
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect smartwatch for your lifestyle and needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-navy">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {category.description}
                  </p>
                  <div className="flex items-center text-teal font-medium">
                    <span className="mr-2">View Collection</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
