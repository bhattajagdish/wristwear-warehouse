
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 lg:px-8 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Introduction</h2>
              <p className="mb-4">
                WristWear Warehouse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by WristWear Warehouse.
              </p>
              <p>
                This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, or enter information on our site.
              </p>
              <p className="mb-4">
                <strong>Personal Information:</strong> Name, email address, phone number, shipping address, billing address, and payment information.
              </p>
              <p className="mb-4">
                <strong>Usage Data:</strong> Information about how you use our website, products, and services.
              </p>
              <p>
                <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect from you in the following ways:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website in order to better serve you.</li>
                <li>To allow us to better service you in responding to your customer service requests.</li>
                <li>To administer a contest, promotion, survey, or other site feature.</li>
                <li>To quickly process your transactions.</li>
                <li>To ask for ratings and reviews of services or products.</li>
                <li>To follow up after correspondence (live chat, email, or phone inquiries).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we update or correct any personal information</li>
                <li>The right to request that we delete personal information</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@wristwear.example.com" className="text-teal hover:underline">privacy@wristwear.example.com</a> or by mail at WristWear Warehouse, 123 Watch Lane, Timepiece City, TC 12345.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center text-teal hover:text-navy transition-colors">
              &larr; Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
