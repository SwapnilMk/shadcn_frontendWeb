import img1 from "@/assets/images/backgrounds/image1.jpg";
import img2 from "@/assets/images/backgrounds/image2.jpg";
import img3 from "@/assets/images/backgrounds/image3.jpg";
import img4 from "@/assets/images/backgrounds/image4.jpg";

import "@/style/Carousel.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Carousel: React.FC = () => {
    const [isNext, setIsNext] = useState(false);
    const [isPrev, setIsPrev] = useState(false);
    const [autoNextTimeout, setAutoNextTimeout] = useState<NodeJS.Timeout | null>(
        null
    );
    const [carouselTimeout, setCarouselTimeout] = useState<NodeJS.Timeout | null>(
        null
    );
    const navigate = useNavigate()

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
                        <div className="title">EQUAL OPPORTUNITY AND</div>
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

                            <Button onClick={()=> navigate('/signup')}>REGISTER NOW</Button>
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
