import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "../components/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  url: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Direct Participation",
    url: "/join/direct-participation",
    description:
      "Have a direct say in the policies and decisions that impact you as a citizen.",
  },
  {
    icon: <MapIcon />,
    title: "Collaborative Networks",
    url: "/join/collaborative-networks",
    description:
      "Benefit from connections using each other's expertise, knowledge, and resources.",
  },
  {
    icon: <PlaneIcon />,
    title: "Transparent Decision-Making",
    url: "/join/transparent-decision-making",
    description:
      "Be part of a process where your voice is heard, and decisions are made with clarity and openness.",
  },
  {
    icon: <GiftIcon />,
    title: "Earn Representation",
    url: "/join/earn-representation",
    description:
      "Be responsive to the people's needs and earn the opportunity to be your area's representative.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-10 sm:py-15">
      <h2 className="text-3xl md:text-4xl font-bold">Why Join BPP?</h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Get involved in a dynamic, open, and interconnected community—where your
        voice is essential to drive the real change.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description, url }: FeatureProps) => (
          <Link
            to={url}
            key={title}
            className="group transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Card className="bg-muted/50 flex flex-col justify-between h-full">
              <div>
                <CardHeader>
                  <CardTitle className="grid gap-4 place-items-center">
                    {icon}
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>{description}</p>
                </CardContent>
              </div>
              <div className="mt-auto mb-3">
                <span className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4">
                  learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
