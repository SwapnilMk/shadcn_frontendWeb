import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbLinkType {
  label: string;
  href: string;
}

interface HeaderComponentProps {
  heading?: string;
  text?: string;
  className?: string;
  breadcrumbLinks?: BreadcrumbLinkType[];
  imgUrl: string; 
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ heading, text, className, breadcrumbLinks, imgUrl }) => {
  return (
    <>
      <div
        className={cn(
          "relative flex justify-center items-center w-full text-white font-sans",
          "min-h-[200px]",
          "bg-cover bg-center bg-no-repeat",
          className
        )}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mt-5 max-w-full mx-auto">
            <h1 className="scroll-m-20 text-4xl my-3 font-extrabold tracking-tight lg:text-5xl">
              {heading}
            </h1>
          </div>
          {text && (
            <div className="text-md font-normal">
              <span>{text}</span>
            </div>
          )}
        </div>
      </div>

      {/* Breadcrumb section */}
      {breadcrumbLinks && breadcrumbLinks.length > 0 && (
        <div className="container">
          <div className="font-bold mt-3 mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <Link to={link.href}>{link.label}</Link>
                    </BreadcrumbItem>
                    {index < breadcrumbLinks.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
