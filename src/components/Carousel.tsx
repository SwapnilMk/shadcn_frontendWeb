import img1 from "@/assets/images/backgrounds/image1.png";
import img2 from "@/assets/images/backgrounds/image2.png";
import img3 from "@/assets/images/backgrounds/image3.png";
import img4 from "@/assets/images/backgrounds/image4.png";
import img5 from "@/assets/images/backgrounds/image5.png";
import img6 from "@/assets/images/backgrounds/image6.png";
import img7 from "@/assets/images/backgrounds/image7.png";
import img8 from "@/assets/images/backgrounds/image8.png";
import img9 from "@/assets/images/backgrounds/image9.png";
import img10 from "@/assets/images/backgrounds/img1.png";
import img11 from "@/assets/images/backgrounds/img2.png";
import img12 from "@/assets/images/backgrounds/img3.png";
import "@/style/Carousel.css";
import React, { useEffect, useRef, useState } from "react";

const Carousel: React.FC = () => {
    const [isNext, setIsNext] = useState(false);
    const [isPrev, setIsPrev] = useState(false);
    const [autoNextTimeout, setAutoNextTimeout] = useState<NodeJS.Timeout | null>(
        null
    );
    const [carouselTimeout, setCarouselTimeout] = useState<NodeJS.Timeout | null>(
        null
    );

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement | null>(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const nextHandler = () => {
        showSlider("next");
    };

    const prevHandler = () => {
        showSlider("prev");
    };

    const showSlider = (type: "next" | "prev") => {
        const sliderItems = sliderRef.current?.querySelectorAll(".item");
        const thumbnailItems = thumbnailBorderRef.current?.querySelectorAll(".item");

        if (type === "next" && sliderItems && thumbnailItems) {
            sliderRef.current?.appendChild(sliderItems[0]);
            thumbnailBorderRef.current?.appendChild(thumbnailItems[0]);
            setIsNext(true);
        } else if (type === "prev" && sliderItems && thumbnailItems) {
            sliderRef.current?.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailBorderRef.current?.prepend(
                thumbnailItems[thumbnailItems.length - 1]
            );
            setIsPrev(true);
        }

        clearTimeout(carouselTimeout!);
        const timeout = setTimeout(() => {
            setIsNext(false);
            setIsPrev(false);
        }, timeRunning);
        setCarouselTimeout(timeout);

        clearTimeout(autoNextTimeout!);
        const nextAutoTimeout = setTimeout(() => {
            nextHandler();
        }, timeAutoNext);
        setAutoNextTimeout(nextAutoTimeout);
    };

    useEffect(() => {
        const nextAutoTimeout = setTimeout(() => {
            nextHandler();
        }, timeAutoNext);
        setAutoNextTimeout(nextAutoTimeout);

        return () => {
            clearTimeout(autoNextTimeout!);
            clearTimeout(carouselTimeout!);
        };
    }, []);

    return (
        <div
            className={`carousel ${isNext ? "next" : ""} ${isPrev ? "prev" : ""}`}
            ref={carouselRef}
        >
            <div className="list" ref={sliderRef}>
                <div className="item">
                    <img src={img1} alt="Slider 1" />
                    <div className="content">
                        <div className="title">National</div>
                        <div className="topic">Integrity</div>
                        <div className="des">
                            The party shall bear true faith and allegiance to the constitution of India as by law established, and to the principles of socialism, secularism and democracy and would uphold the sovereignty, unity and integrity of India.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img2} alt="Slider 2" />
                    <div className="content">
                        <div className="title">EQUAL OPPORTUNITY &</div>
                        <div className="topic">GENDER EQUALITY</div>
                        <div className="des">
                            The party is committed to the task of building a developed democratic India based on principle of equal opportunity to all citizens. The party will lay special emphasis on improving the condition of socially and economically disadvantaged sections of society in order to build an India based on lofty objectives of our freedom struggle.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img3} alt="Slider 3" />
                    <div className="content">
                        <div className="title">GOOD HEALTH &</div>
                        <div className="topic">WELL-BEING</div>
                        <div className="des">
                        The party will work to provide quality health facilities to all citizens, ensuring that every individual has access to health services that improve their quality of life.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img4} alt="Slider 4" />
                    <div className="content">
                        <div className="title">AGAINST MUSCLE &</div>
                        <div className="topic">MONEY POWER</div>
                        <div className="des">
                        The party will endeavor to campaign against evil influence of money power and muscle power vitiating the democratic politics.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img5} alt="Slider 5" />
                    <div className="content">
                        <div className="title">UPHOLD</div>
                        <div className="topic">SECULARISM</div>
                        <div className="des">
                        The party firmly supports secularism and is opposed to the idea of a theocratic state. It will work to protect and promote religious harmony and ensure equal rights for all faiths.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img6} alt="Slider 6" />
                    <div className="content">
                        <div className="title">INDUSTRIAL DEVELOPMENT </div>
                        <div className="topic">& INFRASTRUCTURE</div>
                        <div className="des">
                        The goal of the party is to promote industrial development and build world-class infrastructure to drive economic development. By modernizing industries, encouraging research and development, and enhancing transportation, energy, and digital networks, the party aims to create a sustainable competitive economy.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img7} alt="Slider 7" />
                    <div className="content">
                        <div className="title">EMPLOYMENT &</div>
                        <div className="topic">ECONOMIC GROWTH</div>
                        <div className="des">
                        The party is committed to promoting decent work and sustained economic growth by creating job opportunities, ensuring fair wages, and improving working conditions for all citizens. By fostering an inclusive economy, the party aims to empower individuals, particularly in rural and marginalized communities through skill development, entrepreneurship, and access to employment.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img8} alt="Slider 8" />
                    <div className="content">
                        <div className="title">JUSTICE, PEACE,</div>
                        <div className="topic">CLAM AND PROSPERITY</div>
                        <div className="des">
                        The party aims to create a peaceful, just, and prosperous society where all citizens have equal opportunities, security, and access to resources. By Promoting societies that respect and uphold individual rights as well as the right to privacy, freedom of expression, and access to information.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img9} alt="Slider 9" />
                    <div className="content">
                        <div className="title">UPLIFTMENT OF</div>
                        <div className="topic">FARMERS</div>
                        <div className="des">
                        The party is dedicated to the upliftment of farmers by ensuring fair prices for their product, providing access to modern farming techniques and improving infrastructure in rural areas. The focus will be on increasing farmer’s income through better market access, sustainable agricultural practices and timely financial support.
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img10} alt="Slider 10" />
                    <div className="content">
                        <div className="title">QUALITY</div>
                        <div className="topic">EDUCATION</div>
                        <div className="des">
                        Achieving inclusive and quality education for all reaffirms the belief that education is one of the most powerful and proven vehicles for sustainable development. The goal is to ensure that all girls and boys complete primary and secondary schooling. It also eliminate gender and wealth disparities and achieve universal access to a quality higher education. 
                        </div>
                        <div className="buttons">

                            <button>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                {/* Add more items here if needed */}
            </div>

            <div className="thumbnail" ref={thumbnailBorderRef}>
                <div className="item">
                    <img src={img1} alt="Thumbnail 1" />
                    <div className="content">
                        <div className="title">NATIONAL INTEGRITY</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img2} alt="Thumbnail 2" />
                    <div className="content">
                        <div className="title">EQUAL OPPORTUNITY AND GENDER EQUALITY</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img3} alt="Thumbnail 3" />
                    <div className="content">
                        <div className="title">GOOD HEALTH AND WELL-BEING</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img4} alt="Thumbnail 4" />
                    <div className="content">
                        <div className="title">AGAINST MUSCLE AND MONEY POWER</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img5} alt="Thumbnail 5" />
                    <div className="content">
                        <div className="title">UPHOLD SECULARISM </div>
                    </div>
                </div>
                <div className="item">
                    <img src={img6} alt="Thumbnail 6" />
                    <div className="content">
                        <div className="title">INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img7} alt="Thumbnail 7" />
                    <div className="content">
                        <div className="title">EMPLOYMENT & ECONOMIC GROWTH</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img8} alt="Thumbnail 8" />
                    <div className="content">
                        <div className="title">JUSTICE, PEACE, CLAM AND PROSPERITY</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img9} alt="Thumbnail 9" />
                    <div className="content">
                        <div className="title">UPLIFTMENT OF FARMERS</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img10} alt="Thumbnail 10" />
                    <div className="content">
                        <div className="title">QUALITY EDUCATION</div>
                    </div>
                </div>
                {/* Add more thumbnails here if needed */}
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevHandler}>
                    {"<"}
                </button>
                <button id="next" onClick={nextHandler}>
                    {">"}
                </button>
            </div>

            <div className="time"></div>
        </div>
    );
};

export default Carousel;
