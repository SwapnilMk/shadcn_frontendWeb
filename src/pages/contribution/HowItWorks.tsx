import community from '@/assets/images/headerBanners/community.png';
import HeaderComponent from "@/components/HeaderComponent";
import CommunityProcess from '@/components/Services';
import Layout from "@/layout/Layout";

const HowItWorks = () => {
    return (
        <Layout>
            <HeaderComponent
                heading="Community Contribution"
                text="Community Contribution"
                breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Community Contribution", href: "/community-contribution/how-it-works" }
                ]}
                imgUrl={community}
            />
            <section className="w-full py-8 dark:bg-gray-800">
                <div className="container px-4 mx-auto">                   
                    <CommunityProcess />
                    </div>
            </section>
        </Layout>
    )
}

export default HowItWorks;