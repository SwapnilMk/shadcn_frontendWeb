import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';

const CollaborativeNetworks = () => {
  const content = [
    {
      title: "Overview",
      text: `
        Bharatiya Popular Party aims to build a collaborative network with a strong focus on
        social impact, knowledge-sharing, and mutual growth. The network will play
        a major role in addressing societal issues like poverty, literacy, healthcare, and skill development.
      `,
    },
    {
      title: "Building the Network",
      text: `
        The party is working to build a network of like-minded individuals who are passionate
        about making a positive impact on society. In the collaborative network, we want Party’s
        members to exchange ideas, experiences, and resources. Our focus will be to
        choose mentors based on their education, knowledge, and experience, who can
        share their expertise to develop new skills or knowledge among peers.
      `,
    },
    {
      title: "Social Impact and Literacy",
      text: `
        Through this collaborative network, we aim to enhance literacy by developing educational programs 
        such as online courses, webinars, or community-based workshops to improve literacy levels. 
        Experts in the community can offer specialized training programs in areas like healthcare or entrepreneurship.
        Party encourages skill-sharing through workshops, webinars-seminars, training programs, and mentorship programs.
      `,
    },
    {
      title: "Collaborative Vision",
      text: `
        A collaborative network is a combination of a social network and a professional development hub that will work on various initiatives.
      `,
    },
  ];

  return (
    <Layout>
      <HeaderComponent
        heading="Collaborative Networks"
        text="Bharatiya Popular Party aims to build a collaborative network with a strong focus on social impact, knowledge-sharing, and mutual growth."
        breadcrumbLinks={[
          { label: "Home", href: "/" },
          { label: "Collaborative Networks", href: "/collaborative-networks" },
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

export default CollaborativeNetworks;
