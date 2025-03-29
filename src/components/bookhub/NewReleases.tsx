
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NEW_RELEASES = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop",
    releaseDate: "April 8, 2023",
  },
  {
    id: 2,
    title: "Shadows of Eternity",
    author: "Amelia Clarke",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop",
    releaseDate: "April 12, 2023",
  },
  {
    id: 3,
    title: "The Lost Civilization",
    author: "Thomas Wright",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop",
    releaseDate: "April 15, 2023",
  },
];

const NewReleases = () => {
  return (
    <section className="py-16 bg-[#E1D4C9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <Badge className="bg-[#8B5A2B] mb-2">Just Arrived</Badge>
            <h2 className="text-3xl font-serif font-bold text-[#3E2723]">
              New Releases This Month
            </h2>
          </div>
          <a href="#" className="text-[#8B5A2B] hover:underline font-medium mt-4 md:mt-0">
            View All New Releases →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEW_RELEASES.map((book) => (
            <Card key={book.id} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative aspect-[2/3] bg-[#F5EBE0]">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-[#8B5A2B] text-sm mb-2">
                  Released: {book.releaseDate}
                </p>
                <h3 className="font-serif font-bold text-xl text-[#3E2723] mb-1">
                  {book.title}
                </h3>
                <p className="text-[#5D4037]">by {book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
