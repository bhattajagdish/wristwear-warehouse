
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;
