
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const ProjectsSection = () => {
  return (
    <section className="mb-20" id="projects">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle>E-Commerce Platform</CardTitle>
            <CardDescription className="text-gray-300">Academic Capstone Project</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed a comprehensive e-commerce solution with product catalog, shopping cart functionality, and 
              secure payment integration. Implemented responsive design for optimal viewing across devices.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-teal/40 text-teal">React</Badge>
              <Badge variant="outline" className="border-teal/40 text-teal">Node.js</Badge>
              <Badge variant="outline" className="border-teal/40 text-teal">MongoDB</Badge>
            </div>
            <Button variant="ghost" className="text-teal hover:text-teal/90 hover:bg-teal/10">View Project</Button>
          </CardFooter>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Educational Resource Portal</CardTitle>
            <CardDescription className="text-gray-300">Collaborative University Project</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Created a platform for students to access course materials, submit assignments, and participate in 
              discussion forums. Featured user authentication and role-based access control.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-teal/40 text-teal">JavaScript</Badge>
              <Badge variant="outline" className="border-teal/40 text-teal">Express</Badge>
              <Badge variant="outline" className="border-teal/40 text-teal">SQL</Badge>
            </div>
            <Button variant="ghost" className="text-teal hover:text-teal/90 hover:bg-teal/10">View Project</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
