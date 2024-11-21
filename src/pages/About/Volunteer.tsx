import HeaderComponent from "@/components/HeaderComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/layout/Layout";
import { Building2, Heart, Scale, Users } from "lucide-react";
import volunteer from '@/assets/images/headerBanners/volunteer.png'

const Volunteer = () => {
  return (
    <Layout>
      <HeaderComponent 
        heading="Become a Volunteer" 
        text=""  
        breadcrumbLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Volunteer", href: "/about/volunteer" }
        ]} 
        imgUrl={volunteer} 
      />
      
      <div className="my-6">
        {/* Hero Section */}
        <div className="container">
          <div className="mx-auto px-4 md:px-8">
            <div className="">
              <h1 className="text-4xl font-bold mb-6">
                Are you <span className="text-blue-800">18 years or older</span> and passionate about making a difference in society?
              </h1>
              <p className="text-xl  mb-3">
                The <span className="font-semibold">Bharatiya Popular Party (BPP)</span> invites you to join us as a <span className="font-semibold">volunteer</span> and contribute to building a stronger and prosperous Nation.
              </p>
              <p className="text-xl mb-3">
                Should share and commit to the principles of <span className="font-semibold">democracy, secularism, and socialism</span>.
              </p>
              <p className="text-xl mb-3">
                Be a part of initiatives that uplift marginalized sections of society.
              </p>
              <p className="text-xl mb-3">
                Work towards for equal opportunities and improving access to education, healthcare and employment.
              </p>
              <Button className="bg-blue-800 text-white hover:bg-blue-600 text-lg px-8 py-6">
                Join Us Today
              </Button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="container my-9">
          <h2 className="text-3xl font-bold mb-8">We believe-</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <Scale className="w-12 h-12 mx-auto mb-4 text-blue-800" />
                <h3 className="text-xl font-bold">Justice</h3>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-800" />
                <h3 className="text-xl font-bold">Peace</h3>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-blue-800" />
                <h3 className="text-xl font-bold">Calm</h3>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-800" />
                <h3 className="text-xl font-bold">Prosperity</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-500 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xl mb-8">
            Your support holds the power to drive India’s development. Let us work together towards a world full of opportunities for growth and progress. Together, we can rebuild our nation and make it a better place to live, work, and thrive.
            </p>
            <Button className="bg-white text-black hover:bg-blue-800 hover:text-white text-lg px-8 py-6">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Volunteer;