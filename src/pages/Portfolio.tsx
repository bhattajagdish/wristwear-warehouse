
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-[#15192a]">
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

      <main className="container mx-auto py-20 px-4 md:px-6">
        {/* About Section */}
        <section className="mb-20" id="about">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="pt-6">
              <p className="mb-4">
                Greetings, I am Jagdish Bhatta, a passionate web developer currently pursuing my Bachelor's degree in Computer Science. 
                My academic journey has equipped me with a profound understanding of programming principles, algorithms, and data structures.
              </p>
              <p className="mb-4">
                Through my coursework and independent projects, I have cultivated expertise in front-end technologies including HTML5, CSS3, JavaScript, and React. 
                I am particularly interested in creating intuitive user interfaces that enhance digital experiences.
              </p>
              <p>
                Beyond technical skills, my education has fostered critical thinking and problem-solving abilities that I apply to every development challenge. 
                I am committed to continuous learning and staying abreast of emerging technologies in the rapidly evolving field of web development.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-20" id="skills">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Proficiencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Front-End Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Tailwind CSS</li>
                  <li>Responsive Web Design</li>
                  <li>UI/UX Principles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Back-End Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Node.js, Express.js</li>
                  <li>RESTful API Design</li>
                  <li>Database Management (SQL, MongoDB)</li>
                  <li>Server Deployment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Tools & Methodologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git Version Control</li>
                  <li>Agile Development</li>
                  <li>Testing & Debugging</li>
                  <li>Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Education Section */}
        <section className="mb-20" id="education">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Academic Background</h2>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Bachelor of Science in Computer Science</CardTitle>
              <CardDescription className="text-gray-300">Expected Graduation: 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Currently pursuing my degree with a focus on software development and web technologies. 
                Maintaining a GPA of 3.8/4.0 while participating in various extracurricular activities.
              </p>
              <p>
                Relevant coursework includes Data Structures & Algorithms, Database Systems, 
                Web Development, User Interface Design, and Software Engineering Principles.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Me</h2>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <a href="mailto:jagdish.bhatta@example.com" className="text-teal hover:underline">
                        jagdish.bhatta@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">LinkedIn:</span>
                      <a href="#" className="text-teal hover:underline">
                        linkedin.com/in/jagdishbhatta
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">GitHub:</span>
                      <a href="#" className="text-teal hover:underline">
                        github.com/jagdishbhatta
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available For</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Web Development Projects</li>
                    <li>Internship Opportunities</li>
                    <li>Research Collaboration</li>
                    <li>Freelance Assignments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto py-8 px-4 md:px-6 text-center text-gray-400 border-t border-white/10">
        <p>© 2023 Jagdish Bhatta. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
