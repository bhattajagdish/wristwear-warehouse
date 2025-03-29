
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <header className="container mx-auto pt-20 px-4 md:px-6">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 border-4 border-teal shadow-lg mb-6">
          <AvatarImage src="https://lovable.dev/opengraph-image-p98pqg.png" alt="Jagdish Bhatta" />
          <AvatarFallback className="bg-teal text-white text-2xl">JB</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Jagdish Bhatta</h1>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-teal/20 text-teal hover:bg-teal/30">Web Developer</Badge>
          <Badge variant="secondary" className="bg-teal/20 text-teal hover:bg-teal/30">UI/UX Designer</Badge>
          <Badge variant="secondary" className="bg-teal/20 text-teal hover:bg-teal/30">Bachelor's Student</Badge>
        </div>
        <p className="text-gray-300 max-w-2xl mb-8">
          Dedicated web developer pursuing a Bachelor's degree in Computer Science. 
          Specializing in creating responsive, user-centric applications with modern technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-teal hover:bg-teal/90">
            <Link to="#contact">Contact Me</Link>
          </Button>
          <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
            <Link to="#resume">View Resume</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
