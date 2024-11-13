import bpplogo from '@/assets/images/logos/Bpp.png';
import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';

import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'About Us',
    links: [
      { name: 'Goals', href: '/about/bpp-goals' },
      { name: 'Get To Know BPP', href: '#' },
      { name: 'Charitable Contribution', href: '#' },
      { name: 'Sustainability Commitment', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Logo & Media Request', href: '#' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { name: 'Join Now', href: '#' },
      { name: 'Membership Privilege', href: '#' },
      { name: 'Active Membership Term', href: '#' },
      { name: 'Sign in & Register', href: '#' },
      { name: 'Membership Renewals', href: '#' },
      { name: 'Forget Pin', href: '#' },
    ],
  },
  {
    title: 'Business Community/Vendor',
    links: [
      { name: 'Vendor & Suppliers', href: '#' },
      { name: 'Business Community Join', href: '#' },
      { name: 'Business/Vendor Disclosure', href: '#' },
      { name: 'Ethics Vendor Supplier', href: '#' },
      { name: 'Supplier Inclusion', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-16 border-t">
      <div className="container">
        <footer>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className='flex items-center gap-2'>
            <img
              src={bpplogo}
              alt="logo"
              className="mb-8 mr-auto h-16 md:mb-0"
              /> <span className='text-3xl font-black'>Bharatiya Popular Party</span>
              </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="font-extrabold text-2xl">
                Download App
              </p>
              <div className="flex gap-2">
              <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaGooglePlay className="size-7 text-background" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaApple className="size-7 text-background" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-xl font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-xl font-bold">Customer Support</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">BPP Customer Services</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">BPP APP Technical Support</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Accessability</a>
                </li>
              </ul>
              <h3 className="mb-4 mt-8 text-xl font-bold">Social</h3>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaWhatsapp className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-5" />
          <div>
          <ul className="text-muted-foreground flex justify-around my-5 w-3/4 mx-auto">
                <li className="font-medium hover:text-primary">
                  <a href="#">Site Map</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Terms and Conditions</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Cookies</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Feedback</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Disclaimer</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            © 2024 Bharatiya Popular Party. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
