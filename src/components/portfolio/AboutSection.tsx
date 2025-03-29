
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
