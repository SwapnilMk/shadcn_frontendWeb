import bppFlag from '@/assets/images/logos/bppflag.png';

import { Separator } from '@/components/ui/separator';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './lang-toggle';
import { ModeToggle } from './mode-toggle';

const sections = [
  {
    title: 'About Us',
    links: [
      { name: 'BPP Goals', href: '/about/bpp-goals' },
      { name: 'Get To Know BPP', href: '/about/get-to-know-bpp' },
     
      { name: 'Commitment to Progress', href: '/about/commitment-progress' },
      { name: 'Volunteer', href: '/about/volunteer' },
      { name: 'Logo & Media Request', href: '/about/logo-media-request' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { name: 'Join Now', href: '/auth/signup' },
      { name: 'Membership Privilege', href: '/membership/membership-privilege' },
      { name: 'Active Membership Term', href: '/membership/membership-term' },
      { name: 'Sign in & Register', href: '/login' },
      { name: 'Membership Renewals', href: '/membership/renewals' },
      // { name: 'Forget Pin', href: '/forgot-pin' },
    ],
  },
  {
    title: 'Business Community/Vendor',
    links: [
      { name: 'Vendor & Suppliers', href: '/business-community/vendor-suppliers' },
      { name: 'Business Community Join', href: '/business-community/join' },
      { name: 'Business/Vendor Disclosure', href: '/business-community/disclosure' },
      { name: 'Ethics Vendor Supplier', href: '/business-community/ethics' },
      { name: 'Supplier Inclusion', href: '/business-community/inclusion' },
    ],
  },
  {
    title: 'Community Contributions',
    links: [
      { name: 'Community Contribution', href: '/about/Community-contribution' },
      { name: 'How it Works', href: '#' },
    ],
  },
  {
    title: 'Updates',
    links: [
      { name: 'Updates', href: '#' },
    ],
  },
  {
    title: 'Others',
    links: [
      { name: 'Dashboard', href: '/dashboard/home' },
    ],
  }
];

const Footer = () => {
  return (
    <section className="border-t mt-6">
      <div className="py-6 container">
        <footer>
          <div className="grid grid-cols-12 text-gray-600 md:gap-8">
            {/* Left Column (Logo and Text) */}
            <div className="col-span-2">
              <img src={bppFlag} className="mb-10 mr-auto h-20 w-auto md:mb-0" />
              <h3 className="mb-2 text-sm font-bold my-2 text-blue-700 dark:text-blue-400">Bharatiya Popular Party</h3>
              <div className='my-2 text-muted-foreground font-bold text-xs'>
                Navi Mumbai, Maharashtra India
              </div>
              <div className='my-3 text-muted-foreground text-xs'>
                Join the BPP's Platform and be a part of a dynamic and transparent community. Your voice matters, and together, we can drive meaningful change.
              </div>
            </div>
            {/* Right Column (Other Sections) */}
            <div className="col-span-10 mx-auto grid grid-cols-2 lg:grid-cols-5 md:gap-5">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-2 text-xs font-bold dark:text-white">{section.title}</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="hover:text-primary font-normal hover:underline"
                      >
                        <Link to={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* Member Support Section */}
              <div>
                <h3 className="mb-2 text-xs font-bold dark:text-white">Member Support</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="font-normal hover:text-primary hover:underline">
                    <Link to="/customer-support">BPP Member Services</Link>
                  </li>
                  <li className="font-normal hover:text-primary hover:underline">
                    <a href="#">BPP APP Technical Support</a>
                  </li>
                  <li className="font-normal hover:text-primary hover:underline">
                    <a href="#">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Separator */}
          <Separator className="my-3" />
          <div className='flex gap-8 container '>
            <div>
              <LanguageToggle />
              <ModeToggle />
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <Link to="#" className="group">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <TwitterIcon className="h-4 w-4" />
                </div>
              </Link>
              <Link to="#" className="group">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FacebookIcon className="h-4 w-4" />
                </div>
              </Link>
              <Link to="#" className="group">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <InstagramIcon className="h-4 w-4" />
                </div>
              </Link>
              <Link to="#" className="group">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
          {/* Bottom Section */}
          <section className='grid grid-cols-12 my-3'>
            <p className="text-xs text-center col-span-4 text-muted-foreground">
              © 2024 Bharatiya Popular Party. All rights reserved.
            </p>
            <div className='text-xs col-span-8'>
              <ul className="text-muted-foreground flex flex-wrap justify-around w-3/4 mx-auto">
                <li className="font-medium hover:text-primary">
                  <Link to="/">Site Map</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Cookies</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Feedback</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Disclaimer</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </section>
        </footer>
      </div>
    </section>

  );
};

export default Footer;
