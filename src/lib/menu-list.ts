import {
  Goal,
  HandCoins,
  LayoutGrid,
  LucideIcon,
  SquarePen,
  UserRoundPen,
  Users,
  Wallet
} from 'lucide-react';

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

export function getMenuList(_pathname?: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/home",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/goal",
          label: "Goals",
          icon: Goal,
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
          submenus: [
            {
              href: "/posts",
              label: "Personal Details",
            },
            {
              href: "/posts/new",
              label: "Change Password",
            },
          ]
        },
        {
          href: "",
          label: "Account",
          icon: UserRoundPen,
          submenus: [
            {
              href: "/posts",
              label: "Account Details",
            },
            {
              href: "/posts/new",
              label: "Change Pin",
            },
          ]
        },
        {
          href: "/categories",
          label: "Wallet",
          icon: Wallet,
        },
        // {
        //   href: "/tags",
        //   label: "Wallet History",
        //   icon: History,
        // }
      ]
    },
    {
      groupLabel: "Membership Services",
      menus: [
        {
          href: "/users",
          label: "Membership",
          icon: Users,
          submenus: [
            {
              href: "/account",
              label: "Membership Pass",
            },
            {
              href: "/account",
              label: "Membership Renewals",
            },
            {
              href: "/account",
              label: "Referral Code",
            },
          ]
        },
        {
          href: "/users",
          label: "Community Contribution",
          icon: Users,
          submenus: [
            {
              href: "/account",
              label: "Register Case",
            },
            {
              href: "/account",
              label: "Renewals and Approvals",
            },
            {
              href: "/account",
              label: "Voting",
            },
            {
              href: "/account",
              label: "Results",
            },
            {
              href: "/account",
              label: "Execution",
            },
          ]
        },
        {
          href: "/account",
          label: "Business Community Join",
          icon: HandCoins,
        },
      ]
    }
  ];
}