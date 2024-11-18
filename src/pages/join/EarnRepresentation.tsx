import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';

const EarnRepresentation = () => {
  const content = [
    {
      title: "Leadership Based on Engagement",
      text: `
        Bharatiya Popular Party emphasizes that leadership positions are not granted based on title, seniority, or favoritism but are earned through active, consistent involvement in the community and alignment with the Party's core values and objectives.
      `,
    },
    {
      title: "Representation is Earned, Not Given",
      text: `
        At Party, representation isn’t about titles, it's about responsibility, engagement, and community service. 
        Party believes that active participation and a commitment to the community’s needs should be the primary criteria for earning leadership roles. 
        To be considered for leadership roles, members must consistently be active and supportive. The more active and involved a member is, the more likely they are to earn the chance to lead. 
        By aligning yourself with the Party's mission, values, and objectives, you can earn the opportunity to represent and lead at various levels—from your local community, like city, block, district, to the broader state level.
      `,
    },
    {
      title: "Active Engagement for Leadership",
      text: `
        Members who actively engage in the Party’s activities, projects, and initiatives, whether through volunteering, organizing support, participating in discussions or decisions, will be acknowledged for their contribution. 
        Leadership opportunities are granted to those who demonstrate a deep understanding of the Party's values, goals, and mission. 
        Members following the Party’s principles through their work and interactions within the network will be considered for representation roles.
      `,
    },
    {
      title: "Consistency in Contribution",
      text: `
        Also, it’s not enough to contribute once in a while. Members must demonstrate regular engagement with the Party’s activities and objectives. 
        Leadership roles are for those who consistently invest in the community’s growth.
      `,
    },
  ];

  return (
    <Layout>
      <HeaderComponent
        heading="Earn Representation"
        text="Bharatiya Popular Party emphasizes that leadership positions are not granted based on title, seniority, or favoritism but are earned through active, consistent involvement in the community and alignment with the Party's core values and objectives."
        breadcrumbLinks={[
          { label: "Home", href: "/" },
          { label: "Earn Representation", href: "/earn-representation" },
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

export default EarnRepresentation;
