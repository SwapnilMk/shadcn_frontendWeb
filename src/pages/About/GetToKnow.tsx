import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import bppflag from '@/assets/images/logos/bppflag.png'

const GetToKnow = () => {
    return (
        <Layout>
            <HeaderComponent 
                heading="Get To Know BPP" 
                text="Get To Know More About BPP" 
                breadcrumbLinks={[
                    { label: "About Us", href: "/about" },
                    { label: "Get To Know BPP", href: "/about/get-to-know-bpp" }
                ]}
                imgUrl={bppflag}
            />
            
            <section className="py-8 md:py-12 lg:py-13">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto space-y-8 md:space-y-12">
                        {/* Header Section */}
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                GET TO KNOW BPP
                            </h1>
                            
                            <div className="space-y-4 text-gray-600">
                                <p className="text-base leading-relaxed">
                                    Party was founded in September 2024 by its President, who has been actively
                                    involved in social work for over a decade. To support the industry, he
                                    established a not-for-profit organization that has been serving the trade and
                                    industry for more than ten years.
                                </p>
                                
                                <p className="text-base leading-relaxed">
                                    Party was founded with a clear vision to bring a positive change to society. The party stands as a
                                    symbol of progress, equality and sustainable development in India. Guided by
                                    the principles of democracy, socialism and secularism. Its focus is on giving a
                                    voice to the people, ensuring that citizens' concerns and needs are heard and
                                    addressed. Party is dedicated to building s society where everyone has equal
                                    opportunities.
                                </p>
                                
                                <p className="text-base leading-relaxed">
                                    Party's symbol MIKE symbolize the party's commitment to open communication, transparency, and the free
                                    exchange of ideas, highlighting their desire to stay connected with the public.
                                </p>
                            </div>
                        </div>

                        {/* Image and Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                                <img
                                    src={bppflag}
                                    alt="BPP Flag"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                                <div className="text-sm font-medium text-gray-500 mb-4">
                                    {/* BPP */}
                                </div>
                                <p className="text-base text-gray-700">
                                    BPP is committed to addressing societal challenges and advocating for change through peaceful, democratic means such as seminars, webinars, meetings, and rallies. By focusing on uplifting disadvantaged sections of society, promoting education, healthcare and employment and ensuring the well-being of farmers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GetToKnow;