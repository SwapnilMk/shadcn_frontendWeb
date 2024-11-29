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
      { name: 'Introduction', href: '/community-contribution/introduction' },
      { name: 'How it Works', href: '/community-contribution/how-it-works' },
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
          <div className='flex container justify-between'>
            <div className='flex gap-8'>
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
            <div className="justify-center items-center  sm:flex sm:space-y-0 sm:space-x-4">
              <a href="#"
                className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-3 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="mr-3 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                  </path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#"
                className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-3 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="mr-3 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                  </path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">Get in on</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                </div>
              </a>
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
