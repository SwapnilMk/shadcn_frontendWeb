import { useEffect, useState } from "react";

const MarqueNews = () => {
    const [newsDescriptions, setNewsDescriptions] = useState<string[]>([]);
    const apiUrl = "https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=afc09e5efa144bdaa5ca40ac368b3d1c";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data.status === "ok") {
                    const descriptions = data.sources.map((source: any) => source.description);
                    setNewsDescriptions(descriptions);
                }
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="w-full bg-gray-100 text-gray-800 overflow-hidden">
            <div
                className="flex whitespace-nowrap animate-marquee items-center py-2"
                style={{
                    animation: "scroll 15s linear infinite",
                }}
            >
                {newsDescriptions.length > 0 ? (
                    newsDescriptions.map((desc, index) => (
                        <span key={index} className="mr-10 font-medium">
                            {desc} •
                        </span>
                    ))
                ) : (
                    <span className="font-medium">Loading news...</span>
                )}
            </div>
            {/* Inline animation style */}
            <style>
                {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
            </style>
        </div>
    );
};

export default MarqueNews;
