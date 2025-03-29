
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AuthorSpotlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[#3E2723] mb-10 text-center">
          Author Spotlight
        </h2>

        <div className="bg-[#f8ede3] rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-[#3E2723] mb-2">
                Featured Author
              </h3>
              <h4 className="text-4xl font-serif font-bold text-[#8B5A2B] mb-6">
                Sarah J. Maas
              </h4>
              <p className="text-[#5D4037] mb-6">
                Sarah J. Maas is the #1 New York Times and internationally bestselling author of the Throne of Glass, 
                Court of Thorns and Roses, and Crescent City series. Her books have sold millions of copies and are 
                published in thirty-seven languages.
              </p>
              <p className="text-[#5D4037] mb-8">
                She currently lives in Pennsylvania with her husband, son, and dog.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#8B5A2B] hover:bg-[#6D4C41] text-white">
                  View All Books
                </Button>
                <Button variant="outline" className="border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white">
                  About The Author
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2069&auto=format&fit=crop" 
                alt="Sarah J. Maas"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-[#8B5A2B]">
                  <AvatarImage src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2069&auto=format&fit=crop" alt="Sarah J. Maas" />
                  <AvatarFallback>SJM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[#3E2723]">Latest Release</p>
                  <p className="text-sm text-[#8B5A2B]">House of Sky and Breath</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
