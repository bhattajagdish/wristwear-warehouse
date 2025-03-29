
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, BookMarked, BookText, Bookmark } from "lucide-react";

const GENRES = [
  {
    id: 1,
    name: "Fiction",
    icon: <BookOpen className="h-8 w-8" />,
    books: 1243,
    bgColor: "bg-[#FFECB3]",
    textColor: "text-[#E65100]",
  },
  {
    id: 2,
    name: "Mystery",
    icon: <BookMarked className="h-8 w-8" />,
    books: 876,
    bgColor: "bg-[#B3E5FC]",
    textColor: "text-[#01579B]",
  },
  {
    id: 3,
    name: "Romance",
    icon: <Bookmark className="h-8 w-8" />,
    books: 1032,
    bgColor: "bg-[#F8BBD0]",
    textColor: "text-[#880E4F]",
  },
  {
    id: 4,
    name: "Science Fiction",
    icon: <BookText className="h-8 w-8" />,
    books: 654,
    bgColor: "bg-[#C5E1A5]",
    textColor: "text-[#33691E]",
  },
  {
    id: 5,
    name: "History",
    icon: <BookOpen className="h-8 w-8" />,
    books: 789,
    bgColor: "bg-[#FFCCBC]",
    textColor: "text-[#BF360C]",
  },
  {
    id: 6,
    name: "Biography",
    icon: <BookMarked className="h-8 w-8" />,
    books: 432,
    bgColor: "bg-[#B39DDB]",
    textColor: "text-[#4527A0]",
  },
];

const GenreShowcase = () => {
  return (
    <section className="py-16 bg-[#fcf5eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[#3E2723] mb-10 text-center">
          Explore by Genre
        </h2>

        <ScrollArea className="w-full whitespace-nowrap pb-6">
          <div className="flex space-x-6">
            {GENRES.map((genre) => (
              <div 
                key={genre.id}
                className={`flex-none w-60 rounded-xl ${genre.bgColor} p-6 hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className={`${genre.textColor} mb-4`}>
                  {genre.icon}
                </div>
                <h3 className={`font-serif font-bold text-xl ${genre.textColor} mb-2`}>
                  {genre.name}
                </h3>
                <p className={`${genre.textColor} opacity-80`}>
                  {genre.books} books
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default GenreShowcase;
