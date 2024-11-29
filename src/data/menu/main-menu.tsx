import {
    Goal,
    LayoutGrid,
    LucideIcon,
} from 'lucide-react';

type Submenu = {
    href: string;
    label: string;
    description: string;
    active?: boolean;
};

type Menu = {
    href: string;
    label: string;
    active?: boolean;
    icon: LucideIcon;
    submenus?: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMainMenuList(_pathname?: string): Group[] {
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/",
                    label: "Home",
                    icon: LayoutGrid,
                    submenus: []
                }
            ]
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "/about",
                    label: "About Us",
                    icon: Goal,
                    submenus: [
                        {
                            href: "/about/bpp-goals",
                            label: "BPP Goals",
                            description: `Learn about the goals that drive BPP's mission and vision`
                        },
                        {
                            href: "/about/get-to-know-bpp",
                            label: "Get To Know",
                            description: 'Discover more about BPP, its values, and its journey.'
                        },
                        {
                            href: "/about/commitment-progress",
                            label: "Commitment to Progress",
                            description: `Understand BPP's dedication to sustainability and environmental responsibility.`
                        },
                        {
                            href: "/about/volunteer",
                            label: "Volunteer",
                            description: `Explore exciting career opportunities at BPP.`
                        },
                        {
                            href: "/about/logo-media-request",
                            label: "Logo & Media Request",
                            description: `Request official BPP logos and media assets for use.`
                        },
                    ]
                }
            ]
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "/membership",
                    label: "Membership",
                    icon: Goal,
                    submenus: [
                        {
                            href: "/membership/join-now",
                            label: "Join Now",
                            description: "Become a member and enjoy exclusive benefits.",
                        },
                        {
                            label: "Membership Privilege",
                            href: "/membership/membership-privilege",
                            description: "Learn more about the privileges of being a member.",
                        },
                        {
                            label: "Active Membership Term",
                            href: "/membership/membership-term",
                            description: "View details of your active membership term.",
                        },
                        {
                            label: "Sign in & Register",
                            href: "/auth/login",
                            description: "Sign in or register for membership.",
                        },
                        {
                            label: "Membership Renewals",
                            href: "/membership/renewals",
                            description: "Renew your membership easily.",
                        },
                        {
                            label: "Forget Pin",
                            href: "/auth/forgot-pin",
                            description: "Recover your membership pin.",
                        },
                    ]
                }
            ]
        },
        // {
        //     groupLabel: "",
        //     menus: [
        //         {
        //             href: "/business-community",
        //             label: "Business Community/Vendor",
        //             icon: Goal,
        //             submenus: [
        //                 {
        //                     label: "Vendor & Suppliers",
        //                     href: "/business-community/vendor-suppliers",
        //                     description: "Explore vendors and suppliers within the community.",
        //                 },
        //                 {
        //                     label: "Business Community Join",
        //                     href: "/business-community/join",
        //                     description: "Join the business community and grow your network.",
        //                 },
        //                 {
        //                     label: "Business/Vendor Disclosure",
        //                     href: "/business-community/disclosure",
        //                     description: "View important business/vendor disclosure information.",
        //                 },
        //                 {
        //                     label: "Ethics Vendor Supplier",
        //                     href: "/business-community/ethics",
        //                     description: "Understand the ethics for vendors and suppliers.",
        //                 },
        //                 {
        //                     label: "Supplier Inclusion",
        //                     href: "/business-community/inclusion",
        //                     description: "Learn about supplier inclusion initiatives.",
        //                 }
        //             ]
        //         }
        //     ]
        // },
        {
            groupLabel: "",
            menus: [
                {
                    href: "/community-contribution",
                    label: "Community Contribution",
                    icon: Goal,
                    submenus: [
                        {
                            label: "Introduction",
                            href: "/community-contribution/introduction",
                            description: "community contribution",
                        },
                        {
                            label: "How it works",
                            href: "/community-contribution/how-it-works",
                            description: "Join the business community and grow your network.",
                        },
                    ]
                }
            ]
        },
    ];
}