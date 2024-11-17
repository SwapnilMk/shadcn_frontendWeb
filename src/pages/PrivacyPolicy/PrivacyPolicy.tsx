import React from "react";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { Shield, Users } from "lucide-react";

interface PolicySectionProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({ icon: Icon, title, children }) => (
  <section className="py-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="text-muted-foreground space-y-4 ml-12">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div>
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              BHARATIYA POPULAR PARTY
            </h1>
            <div className="flex justify-center items-center gap-2 mb-8">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Thank you for visiting the website of Bharatiya Popular Party. Your privacy is important to www.bppindia.com. This privacy statement provides information about the personal information that we collect and how we use it.
            </p>
          </div>
        </div>
        <Separator />
        <div className="container mx-auto px-4 max-w-4xl">
          <PolicySection icon={Users} title="Personal Information">
            <p>
              Personal Information means and includes all information that can be linked to a specific individual or to identify any individual, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, age, and address</li>
              <li>Mobile number and e-mail address</li>
              <li>Aadhar number and constituency</li>
              <li>Voter details</li>
              <li>Credit card information when provided</li>
              <li>Geographic information (village, block, district, state)</li>
            </ul>
          </PolicySection>
          {/* ...Rest of your components */}
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
