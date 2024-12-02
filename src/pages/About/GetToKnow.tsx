import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import GetToKnowImg from '@/assets/images/headerBanners/GetToKnow.png';
import bppflag from '@/assets/images/logos/bppflag.png';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const GetToKnow = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <HeaderComponent 
                heading="Get To Know BPP" 
                text="Get To Know More About BPP" 
                breadcrumbLinks={[
                    { label: "About Us", href: "/about" },
                    { label: "Get To Know BPP", href: "/about/get-to-know-bpp" }
                ]}
                imgUrl={GetToKnowImg}
            />
            
            <section className="py-8 md:py-6 lg:py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto space-y-3 md:space-y-4">
                        {/* Header Section */}
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                GET TO KNOW BPP
                            </h1>
                            
                            <main className="container mx-auto px-4 py-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                        </CardHeader>
                                        <CardContent>
                                            <p><span className='font-bold'>Bharatiya Popular Party</span> was founded in September 2024 by its President, who has been actively involved in social work for over a decade. The party stands as a symbol of progress, equality and sustainable development in India, guided by the principles of democracy, socialism and secularism.</p>
                                            <p className="mt-4">Party's symbol MIKE symbolizes the party's commitment to open communication, transparency, and the free exchange of ideas, highlighting their desire to stay connected with the public.</p>
                                        </CardContent>
                                    </Card>
                                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden  ">
                                        <img
                                            src={bppflag}
                                            alt="BPP Flag"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="my-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className='font-bold text-xl'>Why Bharatiya Popular Party</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Party is committed to shape a brighter future for all. By prioritizing unity, sustainability, and social equity, we aim to build a society where everyone has equal opportunities of growth. Party believes in community engagement and transparent governance.</p>
                                    </CardContent>
                                </Card>
                                </div>

                                <Card className="my-4">
                                    <CardHeader>
                                        <CardTitle className='font-bold text-xl'>Key Focus Areas</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="youth">
                                                <AccordionTrigger>Youth</AccordionTrigger>
                                                <AccordionContent>
                                                    Youth Remains Our Priority. They are the future of nation and are at the heart of our ideology. Party is committed to create the policies that ensures better access to education and employment and encouraging entrepreneurship among them.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="economic-growth">
                                                <AccordionTrigger>Economic Growth</AccordionTrigger>
                                                <AccordionContent>
                                                    Party believes in empowering businesses, creating job opportunities, and ensuring a fair distribution of wealth.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="social-justice">
                                                <AccordionTrigger>Social Justice</AccordionTrigger>
                                                <AccordionContent>
                                                    Party's focus is on reducing inequality and providing accessible healthcare, education, and social services for all citizens.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>

                                <div className="grid gap-8 my-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className='font-bold text-xl'>Did You Know?</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Bharatiya Popular Party is a very young and dynamic organisation, founded in September 2024 but has always been at the forefront of driving change in the society.</li>
                                                <li>Party is one of the first parties to introduce a digital participation of the people that will give everyone an opportunity to be the part of policy making.</li>
                                                <li>Instead of following political agendas, party is actively helping implementing the policies that result in the better economic growth of the nation.</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className='font-bold text-xl'>Our Values</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li><strong>Integrity:</strong> Party believes in transparency and honesty, ensuring that every decision reflects the best interests of the people.</li>
                                                <li><strong>Equality:</strong> Party strives for a fair society where everyone, regardless of their background, has the same opportunities to succeed.</li>
                                                <li><strong>Innovation:</strong> We as the Party, embrace new ideas and solutions to handle community challenges. Our focus is on the progress by mutual contribution.</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card className="my-4">
                                    <CardHeader>
                                        <CardTitle className='font-bold text-xl'>Resources</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Party Constitution:</strong> You can download and study party's constitution, outlining our stance on key issues such as healthcare, education, and the economy.</li>
                                            <li><strong>News & Updates:</strong> By subscribing you can stay up-to-date with the latest news on events and developments regarding the party's initiatives.</li>
                                            <li><strong>Volunteer Opportunities:</strong> By signing-up on Party's app you can learn how you can contribute to the movement, local initiatives, campaigns, or supporting party's outreach programs.</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="my-4">
                                    <CardHeader>
                                        <CardTitle className='font-bold text-xl'>Careers with the Party</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-4">Join Our Team: Party is always looking for educated and passionate individuals who agrees to the commitment to change. Whether you're a professional, business holder, mentor or expert, we have opportunities for you to make a meaningful impact.</p>
                                        <p className="mb-4">Volunteer Positions: Support party's work and help shape the future by volunteering your time and skills. Whether it's managing or assisting in local initiatives, we welcome your contribution.</p>
                                        <Button className="w-full sm:w-auto" onClick={() => navigate('/auth/signup')}>Join Us Today</Button>
                                    </CardContent>
                                </Card>
                            </main>
                    </div>
                </div>
                </div>
            </section>
        </Layout>
    );
};

export default GetToKnow;