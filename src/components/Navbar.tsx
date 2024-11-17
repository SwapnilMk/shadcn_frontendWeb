import BppLogo from "@/assets/images/logos/Bpp.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageToggle } from "./lang-toggle";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}


const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Home",
  },

  {
    href: "#testimonials",
    label: "Vision",
  },
  {
    href: "#pricing",
    label: "Our Mission",
  },
  {
    href: "#faq",
    label: "Mapping",
  },
  {
    href: "#faq",
    label: "Why BPP",
  },
];


const membershipItems = [
  {
    title: "Join Now",
    href: "/join-now",
    description: "Become a member and enjoy exclusive benefits.",
  },
  {
    title: "Membership Privilege",
    href: "/membership-privilege",
    description: "Learn more about the privileges of being a member.",
  },
  {
    title: "Active Membership Term",
    href: "/membership-term",
    description: "View details of your active membership term.",
  },
  {
    title: "Sign in & Register",
    href: "/sign-in-register",
    description: "Sign in or register for membership.",
  },
  {
    title: "Membership Renewals",
    href: "/membership-renewals",
    description: "Renew your membership easily.",
  },
  {
    title: "Forget Pin",
    href: "/forget-pin",
    description: "Recover your membership pin.",
  },
];


const businessCommunityItems = [
  {
    title: "Vendor & Suppliers",
    href: "/vendor-suppliers",
    description: "Explore vendors and suppliers within the community.",
  },
  {
    title: "Business Community Join",
    href: "/business-community-join",
    description: "Join the business community and grow your network.",
  },
  {
    title: "Business/Vendor Disclosure",
    href: "/vendor-disclosure",
    description: "View important business/vendor disclosure information.",
  },
  {
    title: "Ethics Vendor Supplier",
    href: "/ethics-vendor-supplier",
    description: "Understand the ethics for vendors and suppliers.",
  },
  {
    title: "Supplier Inclusion",
    href: "/supplier-inclusion",
    description: "Learn about supplier inclusion initiatives.",
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="ml-2 font-bold text-2xl flex justify-center items-center gap-2"
            >
              <img
                src={BppLogo}
                className="object-contain"
                height={75}
                width={75}
                alt="Bpp logo"
              />
              Bharatiya Popular Party
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">

            {/* <ModeToggle /> */}
            <LanguageToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Bharatiya Popular Party
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                <Link to="/">
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="relative flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                          to="/about/bpp-goals"
                        >
                          <img
                            src={BppLogo} 
                            alt="BPP Goals Background"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="relative z-10 bg-black/50 -mx-6 -mb-6 p-6">
                            <div className="mb-2 text-lg font-medium text-white">BPP Goals</div>
                            <p className="text-xs leading-tight text-gray-200">
                              Learn about the goals that drive BPP's mission and vision.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Get To Know BPP">
                      Discover more about BPP, its values, and its journey.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Charitable Contribution">
                      See how BPP is making a difference through charitable work.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Sustainability Commitment"
                    >
                      Understand BPP's dedication to sustainability and environmental responsibility.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Careers">
                      Explore exciting career opportunities at BPP.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Logo & Media Request">
                      Request official BPP logos and media assets for use.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Membership</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {membershipItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Business Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {businessCommunityItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                <Link to="/contact">
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:flex gap-2">
            {/* <Button onClick={() => navigate("/login")}>Log In</Button> */}
            <Button className="bg-blue-600 hover:bg-blue-900" onClick={() => navigate("/signup")}>Join BPP</Button>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
