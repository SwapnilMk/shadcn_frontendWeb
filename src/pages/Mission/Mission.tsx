import HeaderComponent from "@/components/HeaderComponent"
import Layout from "@/layout/Layout"

const Mission = () => {
    return (
        <Layout>
            <HeaderComponent heading="Mission" text="Our Mission"  breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Mission", href: "/mission" },
                ]} imgUrl={"testing"} />
            <div>Mission</div>
        </Layout>
    )
}

export default Mission