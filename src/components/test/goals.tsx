import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

// Import images (assuming the imports are the same as in the original file)
import img7 from "@/assets/images/banners/EMPLOYMENT & ECONOMIC GROWTH.jpeg";
import img2 from "@/assets/images/banners/EQUAL OPPORTUNITY AND GENDER EQUALITY.jpeg";
import img4 from "@/assets/images/banners/GAINST MUSCLE AND MONEY POWER.webp";
import img3 from "@/assets/images/banners/GOOD HEALTH AND WELL-BEING.jpeg";
import img5 from "@/assets/images/banners/INDIA UPHOLD SECULARISM .jpeg";
import img6 from "@/assets/images/banners/INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE.jpeg";
import img8 from "@/assets/images/banners/JUSTICE, PEACE, CALM AND PROSPERITY.jpeg";
import img1 from "@/assets/images/banners/NATIONAL INTEGRITY.jpeg";
import img10 from "@/assets/images/banners/QUALITY EDUCATION.jpg";
import img9 from "@/assets/images/banners/UPLIFTMENT OF FARMERS.jpeg";

const carouselData = [
    {
        img: img1,
        title: "GOAL 1",
        subtitle: "National Integrity",
        description: "Bharatiya Popular Party shall bear true faith and allegiance to the constitution of India as by law established, and to the principles of socialism, secularism and democracy and would uphold the sovereignty, unity and integrity of India.",
    },
    {
        img: img2,
        title: "GOAL 2",
        subtitle: "Equal Opportunity and Gender Equality",
        description: "Bharatiya Popular Party is committed to the task of building a developed democratic India based on principle of equal opportunity to all citizens. The party will lay special emphasis on improving the condition of socially and economically disadvantaged sections of society.",
    },
    {
        img: img3,
        title: "GOAL 3",
        subtitle: "Good Health and Well-Being",
        description: "Bharatiya Popular Party will work to provide quality health facilities to all citizens, ensuring that every individual has access to health services that improve their quality of life.",
    },
    {
        img: img4,
        title: "GOAL 4",
        subtitle: "Against Muscle and Money Power",
        description: "Bharatiya Popular Party will work against the misuse of money and muscle power in democratic politics.",
    },
    {
        img: img5,
        title: "GOAL 5",
        subtitle: "Uphold Secularism",
        description: "Bharatiya Popular Party firmly supports secularism and is opposed to the idea of a theocratic state. BPP will work to protect and promote religious harmony and ensure equal rights for all faiths.",
    },
    {
        img: img6,
        title: "GOAL 6",
        subtitle: "Industrial Development and Infrastructure",
        description: "The goal of the BPP is to promote industrial development and build world-class infrastructure to drive economic development. By modernizing industries, encouraging research and development and enhancing transportation, energy and digital networks, the party aims to create a sustainable competitive economy.",
    },
    {
        img: img7,
        title: "GOAL 7",
        subtitle: "Employment and Economic Growth",
        description: "BPP is committed to promoting decent work and sustained economic growth by creating job opportunities, ensuring fair wages and improving working conditions for all citizens. The party aims to empower individuals particularly in rural and marginalized communities through skill development, entrepreneurship and access to employment.",
    },
    {
        img: img8,
        title: "GOAL 8",
        subtitle: "Justice, Peace, Calm and Prosperity",
        description: "BPP aims to create a peaceful, just, and prosperous society where all citizens have equal opportunities, security and access to resources. By this goal BPP will uphold individual rights as well as the right to privacy freedom of expression and access to information.",
    },
    {
        img: img9,
        title: "GOAL 9",
        subtitle: "Upliftment of Farmers",
        description: "BPP is dedicated to the upliftment of farmers by ensuring fair prices for their product, providing access to modern farming techniques and improving infrastructure in rural areas. The focus will be on increasing farmer's income through better market access, sustainable agricultural practices and timely financial support.",
    },
    {
        img: img10,
        title: "GOAL 10",
        subtitle: "Quality Education",
        description: "BPP believes that education is one of the most powerful and proven vehicles for sustainable development. The goal is to ensure that all girls and boys complete primary and secondary schooling. It also eliminate gender and wealth disparities and achieve universal access to a quality higher education.",
    }
];

const Goals = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                {/* Image Content */}
                <div className="flex items-center justify-center">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5} key={`${currentSlide}-image`}>
                        <div className="w-full max-w-lg h-[400px] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                            <img
                                src={carouselData[currentSlide].img}
                                alt={carouselData[currentSlide].subtitle}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </BoxReveal>
                </div>
                {/* Text Content */}
                <div className="flex flex-col justify-center space-y-2">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5} key={currentSlide}>
                        <p className="text-5xl md:text-5xl font-black">
                            <span className="text-blue-700"> {carouselData[currentSlide].title}</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5} key={`${currentSlide}-subtitle`}>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {carouselData[currentSlide].subtitle}
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5} key={`${currentSlide}-description`}>
                        <p className="text-gray-600 max-w-lg leading-relaxed">
                            {carouselData[currentSlide].description}
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5} key={`${currentSlide}-button`}>
                        <Button className="mt-4 bg-[#5046e6] hover:bg-[#4030c9] transition-colors">
                           learn More
                        </Button>
                    </BoxReveal>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#5046e6]' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Goals;