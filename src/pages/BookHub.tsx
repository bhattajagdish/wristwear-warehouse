
import BookHubHeader from "@/components/bookhub/BookHubHeader";
import HeroSection from "@/components/bookhub/HeroSection";
import FeaturedBooks from "@/components/bookhub/FeaturedBooks";
import GenreShowcase from "@/components/bookhub/GenreShowcase";
import NewReleases from "@/components/bookhub/NewReleases";
import AuthorSpotlight from "@/components/bookhub/AuthorSpotlight";
import BookHubFooter from "@/components/bookhub/BookHubFooter";

const BookHub = () => {
  return (
    <div className="min-h-screen bg-[#fcf5eb]">
      <BookHubHeader />
      
      <main>
        <HeroSection />
        <FeaturedBooks />
        <GenreShowcase />
        <NewReleases />
        <AuthorSpotlight />
      </main>
      
      <BookHubFooter />
    </div>
  );
};

export default BookHub;
