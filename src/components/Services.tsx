import { FileText, PhoneCall, Wallet, UserCheck, ClipboardCheck, Scale, Users, Briefcase,  PanelLeftDashed } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const registrationSteps: ServiceProps[] = [
  {
    title: "1. Eligibility",
    description: "Must be a member of the community and should have real concern to seek the support.",
    icon: <UserCheck />,
  },
  {
    title: "2. Categories of Concerns",
    description: "Concerns can span a wide range of topics including: Health Issues (Any medical or healthcare-related challenges), Educational: Issues related to schooling, scholarships, or educational resources. Legal Matters: Assistance or concerns regarding rights and disputes, Social Challenges: Concerns regarding economic hardship, community welfare, etc.",
    icon: <Wallet />,
  },
  {
    title: "3. Required Details",
    description: "A clear description of the concern with relevant supporting documents. (e.g., medical certificates, school records, legal documents, etc.).",
    icon: <FileText />,
  },
  {
    title: "4. Reference",
    description: "Information regarding complete contact details, prior actions taken, etc.",
    icon: <PhoneCall />,
  },
];

const verificationSteps: ServiceProps[] = [
  {
    title: "5.	Acceptance Criteria",
    description: "Concerns meeting the following criteria may be accepted:  The issue is deemed legitimate and falls under the relevant categories (health, education, legal, etc.), Supporting documents are complete and valid, the concern meets the community's needs and is in line with the BPP’s goals.",
    icon: <ClipboardCheck />,
  },
  {
    title: "6.	Rejection Criteria",
    description: "Concerns may be rejected for reasons such as: Incomplete or fraudulent supporting documents., the issue does not fall within the scope of the categories served by BPP, the concern does not meet the established criteria for urgency or relevance.",
    icon: <Scale />,
  },
  {
    title: "7.	Sole Discretion of BPP Administration",
    description: "The decision to accept or reject concerns will be made at the *sole discretion* of the BPP administration. Administration will have the final authority to decide whether the concern should be addressed or not.",
    icon: <PanelLeftDashed />,
  },
];

const implementationSteps: ServiceProps[] = [
  {
    title: "8. Verification fails ",
    description: "If the verification fails (e.g., documents are found to be invalid or incomplete), the concern may be rejected.",
    icon: <Users />,
  },
  {
    title: "9. Notification",
    description: "The community member will be notified if the concern is being sent for verification or if any further documentation is required.",
    icon: <Briefcase />,
  },
];

export const CommunityProcess = () => {
  return (
    <section className="container py-3">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">How Community Contribution Works</h1>
        <p className="text-muted-foreground text-xl">
          Community development and support will be driven by three main groups: the Common Man, Professionals, and Business Leaders. Together, these individuals create a system that addresses and solves community issues in a collaborative manner.
        </p>
      </div>
      <Separator className="mb-12" />

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Register your Case</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Every member of the community, or the primary member who has any concern to address can upload that on the app.
          </p>
          <div className="flex flex-col gap-3">
            {registrationSteps.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/800x930"
            className="w-[300px] md:w-[500px] lg:w-full object-contain"
            alt="Registration process"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <img
            src="https://placehold.co/800x900"
            className="w-[300px] md:w-[500px] lg:w-full object-contain"
            alt="Verification process"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold">Review by the Administration</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            The concern will be addresses and review by the BPP administration, that consist off State heads, district heads and rural, or block heads.
            Administration will assess and accept or reject the case on the basis of urgency, relevance and verification.
          </p>
          <div className="flex flex-col gap-3">
            {verificationSteps.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Verification Process</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Submitted concern will go through the verification process. If any supporting documents or details appear to be unclear, inaccurate, or insufficient, the concern may undergo further verification.
          </p>
          <div className="flex flex-col gap-3">
            {implementationSteps.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/800x560"
            className="w-[300px] md:w-[500px] lg:w-full object-contain"
            alt="Implementation process"
          />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Raising an Appeal</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          If a concern is rejected, the person who submitted it has the right to appeal the decision.
        </p>
        <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
          <li>• The appeal can be based on providing additional information or clarifying any misinterpretations of the original submission.</li>
        </ul>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Review of Appeal</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          The appeal will be reviewed by a higher body within the Bharatiya Popular Party
        </p>
        <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
          <li>• The final decision on the appeal will be communicated to the concerned member. This decision will be **final** and binding.</li>
        </ul>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">OATing</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Upon acceptance of the case, this will go to the pool for OATing. A criteria of  60/40 proportion will be followed. This means the 60% of community OATs should favour the requirement posted by the individual (or recipient).
        </p>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Professional Response</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Once a concern is approved, relevant Professional according to the specialised area, will address the concern. Based on app analysis professional will assess the situation and provide the necessary guidance, support, and solutions. Fees charges by the professional should be reasonable as this is a pure community service.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Administration for the approval</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          once the professional gives the acceptance to serve the concern, this will finally go for administration approval.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Upon the final review by the administration</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Professional will review, comment, refer to business or  serve the concern.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Community Fund Utilization</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Once the service is provided, payment will be made directly to the business or service provider, ensuring transparency and smooth transactions. The community fund will be used to make such payment to the professionals, businesses and to purchase services like medical care, scholarships, education, consultancy, etc.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Business Registration for payment</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Entities and business serving the case will have to be registered with the community app for payment execution.
        </p>
      </div>
    </section>
  );
};

export default CommunityProcess;