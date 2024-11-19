import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';

const TransparentDecisionMaking = () => {
  const content = [
    {
      title: "Commitment to Inclusivity",
      text: `
        Bharatiya Popular Party is committed to inclusivity, fairness, and mutual respect among all members 
        by creating an environment where every voice is heard and decisions are made collectively. 
        This approach will strengthen the sense of community as the decisions reflect the collective interests of all the members.
      `,
    },
    {
      title: "Openness and Transparency",
      text: `
        At Party, we believe that openness is the foundation of a strong, developing community. 
        We invite you to be a part of the process where every voice matters. Transparency is key to this process as 
        the members will have access to information about decisions and their potential impact. Hence, 
        members will be encouraged to contribute ideas and vote on key issues.
      `,
    },
    {
      title: "Collective Decision-Making",
      text: `
    Party’s approach ensures that decisions are collective and based on the active participation and contributions of our members. Every member, regardless of their role or background, has the opportunity to participate in shaping the community’s direction.
      `,
    },
    {
      title: "Dynamic Roles and Responsibilities",
      text: `
     Roles and responsibilities within the community will be determined by the active contribution of the members. Members who actively engage will have the opportunity to take on leadership positions or other roles of influence. As a result, members’ positions within the community will be dynamic and based on their involvement rather than titles or hierarchy.
      `,
    },
  ];

  return (
    <Layout>
      <HeaderComponent
        heading="Transparent Decision-Making"
        text="Bharatiya Popular Party is committed to inclusivity, fairness, and mutual respect among all members by creating an environment where every voice is heard and decisions are made collectively."
        breadcrumbLinks={[
          { label: "Home", href: "/" },
          { label: "Transparent Decision-Making", href: "/transparent-decision-making" },
        ]}
        imgUrl={"null"}
      />
      <section className="container mx-auto py-10 px-4 sm:px-8 md:px-12">
        <div className="space-y-10">
          {content.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center md:text-left md:flex-row gap-8 border-b pb-6 last:pb-0 last:border-b-0 border-muted">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{section.title}</h2>
                <p className="text-md md:text-md text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default TransparentDecisionMaking;
