import bppflag from '@/assets/images/logos/bppflag.png';
import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';

const GetToKnow = () => {
    return (
        <Layout>
            <HeaderComponent heading="Get To Know BPP" text="Get To Know More About BPP" breadcrumbLinks={[
                { label: "About Us", href: "/about" },
                { label: "Get To Know BPP", href: "/about/get-to-know-bpp" }
            ]}
                imgUrl={"null"}
            />
            <section className="container py-11">
                <div className="container flex flex-col gap-8">
                    <div className="flex flex-col gap-7">
                        <h1 className="text-4xl font-semibold lg:text-3xl">
                            GET TO KNOW BPP
                        </h1>
                        <p className="max-w-full text-sm">
                            The Bharatiya Popular Party (BPP) was founded in 2024 by its President, <span className='font-bold'>Mr. Jaheer Bukhari</span>, with a clear vision to bring change to society. The party stands as a symbol of progress, equality and sustainable development in India. Guided by the principles of democracy, socialism and secularism. BPP is dedicated to building a society where everyone has equal opportunities.
                        </p>
                        {/* <p className="max-w-full text-sm">
                        BPP is committed to addressing societal challenges and advocating for change through peaceful, democratic means such as seminars, webinars, meetings, and rallies. By focusing on uplifting disadvantaged sections of society, promoting education, healthcare and employment and ensuring the well-being of farmers.
                        </p> */}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <img
                            src={bppflag}
                            alt="placeholder"
                            className="size-full max-h-96 rounded-2xl object-cover"
                        />
                        <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
                            <p className="text-sm text-muted-foreground">BPP</p>
                            <p className="text-sm font-medium">
                                BPP is committed to addressing societal challenges and advocating for change through peaceful, democratic means such as seminars, webinars, meetings, and rallies. By focusing on uplifting disadvantaged sections of society, promoting education, healthcare and employment and ensuring the well-being of farmers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GetToKnow;
