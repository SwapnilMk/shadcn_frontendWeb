import bppLogo from "@/assets/logo/bppLogo.svg";
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
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { LanguageToggle } from "../lang-toggle";
import { ModeToggle } from "../mode-toggle";
import { Button, buttonVariants } from "../ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/vision",
    label: "Vision",
  },
  {
    href: "/mission",
    label: "Our Mission",
  },
  {
    href: "/mapping",
    label: "Mapping",
  },
  {
    href: "/why-bpp",
    label: "Why BPP",
  },
];

export const membershipItems = [
  {
    title: "Join Now",
    href: "/membership/join-now",
    description: "Become a member and enjoy exclusive benefits.",
  },
  {
    title: "Membership Privilege",
    href: "/membership/membership-privilege",
    description: "Learn more about the privileges of being a member.",
  },
  {
    title: "Active Membership Term",
    href: "/membership/membership-term",
    description: "View details of your active membership term.",
  },
  {
    title: "Sign in & Register",
    href: "/auth/login",
    description: "Sign in or register for membership.",
  },
  {
    title: "Membership Renewals",
    href: "/membership/renewals",
    description: "Renew your membership easily.",
  },
  {
    title: "Forget Pin",
    href: "/auth/forgot-pin",
    description: "Recover your membership pin.",
  },
];

export const businessCommunityItems = [
  {
    title: "Vendor & Suppliers",
    href: "/business-community/vendor-suppliers",
    description: "Explore vendors and suppliers within the community.",
  },
  {
    title: "Business Community Join",
    href: "/business-community/join",
    description: "Join the business community and grow your network.",
  },
  {
    title: "Business/Vendor Disclosure",
    href: "/business-community/disclosure",
    description: "View important business/vendor disclosure information.",
  },
  {
    title: "Ethics Vendor Supplier",
    href: "/business-community/ethics",
    description: "Understand the ethics for vendors and suppliers.",
  },
  {
    title: "Supplier Inclusion",
    href: "/business-community/inclusion",
    description: "Learn about supplier inclusion initiatives.",
  }
];
export const CommunityContribution = [
  {
    title: "Introduction",
    href: "/community-contribution/introduction",
    description: "community contribution",
  },
  {
    title: "How it works",
    href: "/community-contribution/how-it-works",
    description: "Join the business community and grow your network.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="sticky border-b-[1px] top-0 z-100 w-full max-w-full bg-white dark:border-b-slate-700 dark:bg-background dark:shadow-secondary">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="px-4 h-16 flex  ">
          <NavigationMenuItem className="font-bold">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="ml-2 font-bold text-xl flex justify-center items-center gap-2"
            >
              <img
                src={bppLogo}
                className="object-contain"
                height={65}
                width={65}
                alt="logo"
              />
              {t('navigation.partyName')}
            </Link>
          </NavigationMenuItem>
          {/* mobile */}
          <span className="flex lg:hidden">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex lg:hidden h-5 w-5"
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
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                <Link to="/">
                  <NavigationMenuLink>{t('navigation.home')}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('navigation.aboutUs')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="relative flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                          to="/about/bpp-goals"
                        >
                          <img
                            src={bppLogo}
                            alt="BPP Goals Background"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="relative z-10 bg-black/50 -mx-6 -mb-6 p-6">
                            <div className="mb-2 text-lg font-medium text-white">{t('navigation.goals')}</div>
                            <p className="text-xs leading-tight text-gray-200">
                              Learn about the goals that drive BPP's mission and vision.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/about/get-to-know-bpp" title={t("navigation.GetToKnowBPP")}>
                      Discover more about BPP, its values, and its journey.
                    </ListItem>
                    <ListItem to="/about/Community-contribution" title={t("navigation.CommunityContribution")}>
                      See how BPP is making a difference through charitable work.
                    </ListItem>
                    <ListItem
                      to="/about/commitment-progress"
                      title={t("navigation.CommitmentProgress")}
                    >
                      Understand BPP's dedication to sustainability and environmental responsibility.
                    </ListItem>
                    <ListItem to="/about/volunteer" title={t("navigation.volunteer")}>
                      Explore exciting career opportunities at BPP.
                    </ListItem>
                    <ListItem to="/about/logo-media-request" title={t("navigation.LogoMediaRequest")}>
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
                      <ListItem key={item.title} title={item.title} to={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community Contributions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {CommunityContribution.map((item) => (
                      <ListItem key={item.title} title={item.title} to={item.href}>
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
          <div className="hidden lg:flex gap-2">
            <Button className="bg-blue-600 hover:bg-blue-900" onClick={() => navigate("/auth/signup")}>Join BPP</Button>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";