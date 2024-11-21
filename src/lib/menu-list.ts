import {
  Goal,
  HandCoins,
  History,
  LayoutGrid,
  LucideIcon,
  SquarePen,
  UserRoundPen,
  Users,
  Wallet
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
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

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          active: pathname === "/dashboard",
          submenus: []
        },
        {
          href: "/dashboard",
          label: "Goals",
          icon: Goal,
          active: pathname === "/",
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Profile",
      menus: [
        {
          href: "",
          label: "Profile",
          icon: SquarePen,
          active: pathname.startsWith("/posts"),
          submenus: [
            {
              href: "/posts",
              label: "Personal Details",
              active: pathname === "/posts"
            },
            {
              href: "/posts/new",
              label: "Change Password",
              active: pathname === "/posts/new"
            },
          ]
        },
        {
          href: "",
          label: "Account",
          icon: UserRoundPen,
          active: pathname.startsWith("/posts"),
          submenus: [
            {
              href: "/posts",
              label: "Account Details",
              active: pathname === "/posts"
            },
            {
              href: "/posts/new",
              label: "Change Pin",
              active: pathname === "/posts/new"
            },
          ]
        },
        {
          href: "/categories",
          label: "Wallet",
          icon: Wallet,
          active: pathname === "/categories"
        },
        {
          href: "/tags",
          label: "Wallet History",
          icon: History,
          active: pathname === "/tags"
        }
      ]
    },
    {
      groupLabel: "Membership Services",
      menus: [
        {
          href: "/users",
          label: "Membership",
          icon: Users,
          active: pathname === "/users",
          submenus: [
            {
              href: "/account",
              label: "Membership Pass",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Membership Renewals",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Referral Code",
              active: pathname === "/account"
            },
          ]
        },
        {
          href: "/users",
          label: "Community Contribution",
          icon: Users,
          active: pathname === "/users",
          submenus: [
            {
              href: "/account",
              label: "Register Case",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Renewals and Approvals",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Voting",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Results",
              active: pathname === "/account"
            },
            {
              href: "/account",
              label: "Execution",
              active: pathname === "/account"
            },
          ]
        },
        {
          href: "/account",
          label: "Business Community Join",
          icon: HandCoins,
          active: pathname === "/account"
        },
      ]
    }
  ];
}