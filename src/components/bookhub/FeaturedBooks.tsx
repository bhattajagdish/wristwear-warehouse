
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen } from "lucide-react";

const FEATURED_BOOKS = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Eleanor Mitchell",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
    genre: "Mystery",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "James Holden",
    cover: "https://images.unsplash.com/photo-1531901599143-ab65d4a8d534?q=80&w=1974&auto=format&fit=crop",
    genre: "Science Fiction",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Whispers in the Wind",
    author: "Sofia Chen",
    cover: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?q=80&w=1974&auto=format&fit=crop",
    genre: "Fantasy",
    rating: 4.9,
  },
  {
    id: 4,
    title: "The Last Memoir",
    author: "Robert Johnson",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop",
    genre: "Biography",
    rating: 4.7,
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#3E2723]">
            Featured Books
          </h2>
          <a href="#" className="text-[#8B5A2B] hover:underline font-medium">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_BOOKS.map((book) => (
            <Card key={book.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-[#E1D4C9]">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-2 right-2 bg-[#8B5A2B]">
                  {book.genre}
                </Badge>
              </div>
              <CardContent className="pt-5">
                <h3 className="font-serif font-bold text-xl text-[#3E2723] mb-1">
                  {book.title}
                </h3>
                <p className="text-[#5D4037] mb-3">by {book.author}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[#5D4037]">{book.rating}</span>
                  <button className="ml-auto text-[#8B5A2B] hover:text-[#6D4C41]">
                    <BookOpen className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
