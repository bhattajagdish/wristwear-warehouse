
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
