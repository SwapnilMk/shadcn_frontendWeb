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
<>
    {alert('error while rendering')}
</>
  );
};
