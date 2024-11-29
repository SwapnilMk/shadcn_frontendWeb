import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bppLogo from "@/assets/logo/bppLogo.svg";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import { ChevronDown, MenuIcon } from "lucide-react";
import { getMainMenuList } from "@/data/menu/main-menu";
import { cn } from "@/lib/utils";
import { LanguageToggle } from '../lang-toggle';
import { ModeToggle } from '../mode-toggle';

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { description?: string }
>(({ className, title, children, description, ...props }, ref) => {
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
                        {description}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

const MainNav = () => {
    const location = useLocation();
    const menuList = getMainMenuList(location.pathname);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={bppLogo} className="h-14 w-14 object-contain" alt="BPP Logo" />
                    <span className="text-xl font-bold font-oswald">Bharatiya Popular Party</span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="gap-2">
                        {menuList.map((group, groupIndex) =>
                            group.menus.map((menu) => (
                                <NavigationMenuItem key={`${groupIndex}-${menu.href}`}>
                                    {menu.submenus?.length ? (
                                        <>
                                            <NavigationMenuTrigger>
                                                <span className="flex items-center gap-1">
                                                    {menu.label}
                                                </span>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                                    {menu.submenus.map((submenu) => (
                                                        <ListItem
                                                            key={submenu.href}
                                                            title={submenu.label}
                                                            description={submenu.description}
                                                            to={submenu.href}
                                                        />
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link
                                            to={menu.href}
                                            className="inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            {menu.label}
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))
                        )}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Navigation */}
                <div className="flex lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Menu">
                                <MenuIcon className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                        <img src={bppLogo} className="h-8 w-8" alt="BPP Logo" />
                                        <span className="font-bold font-oswald">Bharatiya Popular Party</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 space-y-2">
                                {menuList.map((group, groupIndex) =>
                                    group.menus.map((menu) => (
                                        <Collapsible key={`${groupIndex}-${menu.href}`}>
                                            {menu.submenus?.length ? (
                                                <>
                                                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 text-left hover:bg-accent">
                                                        <span className="text-sm font-medium">{menu.label}</span>
                                                        <ChevronDown className="h-4 w-4" />
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent className="ml-4 space-y-2">
                                                        {menu.submenus.map((submenu) => (
                                                            <Link
                                                                key={submenu.href}
                                                                to={submenu.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block rounded-md p-2 text-sm hover:bg-accent"
                                                            >
                                                                {submenu.label}
                                                            </Link>
                                                        ))}
                                                    </CollapsibleContent>
                                                </>
                                            ) : (
                                                <Link
                                                    to={menu.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block rounded-md p-2 text-sm hover:bg-accent"
                                                >
                                                    {menu.label}
                                                </Link>
                                            )}
                                        </Collapsible>
                                    ))
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/auth/signup" className="text-white">Join BPP</Link>
                    </Button>
                    <LanguageToggle />
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default MainNav;