import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout'

const DirectParticipation = () => {
  const sections = [
    {
      title: "Primary Members",
      description:
        "Primary Members support the party but are less directly involved than active members. They can have voting rights, particularly in party conventions or primary elections, and may contribute through financial support or other forms of advocacy.",
      details: [
        "They help by endorsing the party, attending major events, or supporting candidates during elections.",
        "They have the ability to influence party decisions through their vote.",
        "Their participation is important, especially in decisions like selecting candidates or shaping party leadership.",
      ],
    },
    {
      title: "Active Members",
      description:
        "Active Members are the most involved in day-to-day party activities. They participate in meetings, engage in campaigns, and contribute to shaping the party's policies or agenda.",
      details: [
        "They have a say in key decisions such as leadership elections or policy proposals.",
        "As active participants, they may have a stronger voice in shaping the party's platform or in local elections and may be eligible for leadership roles within the party structure.",
      ],
    },
    {
      title: "Block Heads",
      description:
        "Block Heads are the local leaders or representatives in charge of organizing party activities within specific regions or blocks. They are responsible for arranging rallies, managing party events, and ensuring party messages are disseminated effectively at the grassroots level.",
      details: [
        "They have active participation in leading campaigns, communicating with the party leadership, and ensuring the party's activities align with its overall goals at the local level.",
        "They have a significant voice in local party decisions, especially in election strategies and community engagement.",
        "Their influence in their respective blocks could also allow them to play a role in larger party policy formation.",
      ],
    },
  ];


  return (
    <Layout>
      <HeaderComponent heading="Direct Participation" text="Bhartiya Popular Party provides a system where members can participate directly in the party's activities and decision-making processes." breadcrumbLinks={[
        { label: "Home", href: "/" },
        { label: "Direct Participation", href: "/direct-participation" },
      ]} imgUrl={"null"} />
      <section className="container mx-auto py-10 sm:py-15 px-4">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b pb-6 last:pb-0 last:border-b-0 border-muted"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                {section.title}
              </h2>
              <p className="text-md text-muted-foreground mb-4">
                {section.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="text-base sm:text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default DirectParticipation