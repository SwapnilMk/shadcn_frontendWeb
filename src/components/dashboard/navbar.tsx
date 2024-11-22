import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/dashboard/user-nav";
import { SheetMenu } from "@/components/dashboard/sheet-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import BppLogo from '@/assets/images/logos/Bpp.png'
import { useTranslation } from "react-i18next";
import { businessCommunityItems, ListItem, membershipItems } from "../Navbar";

interface NavbarProps {
  title: string;
}

export function Navbar({ }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-20 items-center">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-4 lg:space-x-0 flex-shrink-0">
          <SheetMenu />
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
              {t('navigation.partyName')}
            </Link>
          </NavigationMenuItem>
        </div>

        {/* Center Section: Navigation Menu */}
        <div className="flex flex-1 justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                <Link to="/">
                  <NavigationMenuLink>{t("navigation.home")}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navigation.aboutUs")}</NavigationMenuTrigger>
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
                            <div className="mb-2 text-lg font-medium text-white">{t("navigation.goals")}</div>
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
                    <ListItem to="/about/commitment-progress" title={t("navigation.CommitmentProgress")}>
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
                <NavigationMenuTrigger>Business Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {businessCommunityItems.map((item) => (
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
        </div>

        {/* Right Section: Mode Toggle and User Navigation */}
        <div className="flex flex-shrink-0 items-center justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
