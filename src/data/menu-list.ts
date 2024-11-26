import {
  Goal,
  HandCoins,
  HandHelping,
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
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/donate",
          label: "Donate",
          icon: HandHelping,
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
              href: "/dashboard/profile",
              label: "Personal Details",
            },
            // {
            //   href: "/posts/new",
            //   label: "Change Password",
            // },
          ]
        },
        {
          href: "",
          label: "Account",
          icon: UserRoundPen,
          submenus: [
            {
              href: "/dashboard/account",
              label: "Account Details",
            },
            {
              href: "/dashboard/change-pin",
              label: "Change Pin",
            },
          ]
        },
        {
          href: "/dashboard/wallet",
          label: "Wallet",
          icon: Wallet,
        },
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
              href: "/dashboard/certificate",
              label: "Membership Pass",
            },
            {
              href: "/dashboard/renewal",
              label: "Membership Renewals",
            },
            {
              href: "/dashboard/referral",
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
              label: "Review and Approvals",
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