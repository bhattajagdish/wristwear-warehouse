
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;
