
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2030&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#3E2723] mb-6">
            Discover Your Next Literary Adventure
          </h1>
          <p className="text-xl text-[#5D4037] mb-8">
            Explore our vast collection of carefully curated books spanning every genre, 
            from timeless classics to contemporary masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#8B5A2B] hover:bg-[#6D4C41] text-white px-8 py-6 text-lg"
            >
              Browse Catalog
            </Button>
            <Button 
              variant="outline" 
              className="border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white px-8 py-6 text-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Join Book Club
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fcf5eb] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
