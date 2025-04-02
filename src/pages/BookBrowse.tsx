
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search } from "lucide-react";
import BookHubHeader from "@/components/bookhub/BookHubHeader";
import BookHubFooter from "@/components/bookhub/BookHubFooter";

// Sample book data
const books = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Elena Rivers",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    genre: "Mystery",
    price: 24.99,
    rating: 4.7
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "Marcus Chen",
    cover: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?q=80&w=1000&auto=format&fit=crop",
    genre: "Science Fiction",
    price: 19.99,
    rating: 4.5
  },
  {
    id: 3,
    title: "Whispers in the Wind",
    author: "Sophia Williams",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop",
    genre: "Romance",
    price: 18.50,
    rating: 4.3
  },
  {
    id: 4,
    title: "The Last Kingdom",
    author: "James Sullivan",
    cover: "https://images.unsplash.com/photo-1521123845560-14093637aa7d?q=80&w=1000&auto=format&fit=crop",
    genre: "Fantasy",
    price: 22.99,
    rating: 4.8
  },
  {
    id: 5,
    title: "Shadows of Yesterday",
    author: "Olivia Parker",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop",
    genre: "Thriller",
    price: 20.50,
    rating: 4.6
  },
  {
    id: 6,
    title: "Autumn Leaves",
    author: "Daniel Wright",
    cover: "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?q=80&w=1000&auto=format&fit=crop",
    genre: "Literary Fiction",
    price: 17.99,
    rating: 4.2
  },
  {
    id: 7,
    title: "Starlight Dreams",
    author: "Amelia Jordan",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1000&auto=format&fit=crop",
    genre: "Science Fiction",
    price: 21.99,
    rating: 4.4
  },
  {
    id: 8,
    title: "The Mountain Path",
    author: "Nathan Brooks",
    cover: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=1000&auto=format&fit=crop",
    genre: "Adventure",
    price: 23.50,
    rating: 4.5
  }
];

const BookBrowse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "all" || book.genre.toLowerCase() === selectedGenre.toLowerCase();
    
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-[#fcf5eb]">
      <BookHubHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="w-full md:w-1/4 space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search books or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Genres</h3>
              <RadioGroup value={selectedGenre} onValueChange={setSelectedGenre}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Genres</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="mystery" id="mystery" />
                  <Label htmlFor="mystery">Mystery</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="science fiction" id="scifi" />
                  <Label htmlFor="scifi">Science Fiction</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="romance" id="romance" />
                  <Label htmlFor="romance">Romance</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="fantasy" id="fantasy" />
                  <Label htmlFor="fantasy">Fantasy</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="thriller" id="thriller" />
                  <Label htmlFor="thriller">Thriller</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          {/* Book grid */}
          <div className="w-full md:w-3/4">
            <h1 className="text-3xl font-bold mb-6">Browse Books</h1>
            
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No books found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBooks.map(book => (
                    <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-gray-600 mb-2">by {book.author}</p>
                        <div className="flex justify-between items-center">
                          <span className="bg-[#e9dcc3] text-[#8b6e4e] px-2 py-1 rounded-full text-xs">{book.genre}</span>
                          <span className="font-bold">${book.price.toFixed(2)}</span>
                        </div>
                        <div className="mt-3 flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-500">({book.rating})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            )}
          </div>
        </div>
      </main>
      
      <BookHubFooter />
    </div>
  );
};

export default BookBrowse;
