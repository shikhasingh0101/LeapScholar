import React, { useRef, useState } from "react";
import "./DiscountSection.css";

function DiscountSection() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0); // Tracks the active banner

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.max(activeDot - 1, 0); // Prevent going below 0
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      setActiveDot(newIndex);
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.min(activeDot + 1, banners.length - 1); // Prevent exceeding last index
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      setActiveDot(newIndex);
    }
  };

  // Update the active dot based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeftPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeftPosition / cardWidth); // Calculate active banner index
      setActiveDot(newIndex);
    }
  };

  const banners = [
    {
      imgSrc: "https://d3qj1pefcqovqy.cloudfront.net/Desktop_IELTS_f1a67959b8.webp",
      alt: "Discount Banner 1",
      link: "http://leapscholar.com/ielts-seo-form/ielts_discount",
    },
    {
      imgSrc: "https://d3qj1pefcqovqy.cloudfront.net/Desktop_Duolingo_32d3d7740b.webp",
      alt: "Discount Banner 2",
      link: "https://d3qj1pefcqovqy.cloudfront.net/partnership/duolingo/form",
    },
  ];

  return (
    <section className="discount-section">
      <h3 className="discount-title">
        <div className="grow">
          <img
            src="https://d14lg9nzq1d3lc.cloudfront.net/assets/icons/discount_line.svg"
            alt="Left Line"
            width="100"
            height="10"
          />
        </div>
        Exclusive Discounts
        <div className="rotate-180 grow">
          <img
            src="https://d14lg9nzq1d3lc.cloudfront.net/assets/icons/discount_line.svg"
            alt="Right Line"
            width="100"
            height="10"
          />
        </div>
      </h3>

      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {banners.map((banner, index) => (
          <a
            key={index}
            className="discount-card"
            href={banner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={banner.imgSrc} alt={banner.alt} />
          </a>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="scroll-button left" onClick={scrollLeft}>
        <img
          src="https://d14lg9nzq1d3lc.cloudfront.net/assets/icons/white_arrow_btn.svg"
          alt="Scroll Left"
        />
      </div>
      <div className="scroll-button right" onClick={scrollRight}>
        <img
          src="https://d14lg9nzq1d3lc.cloudfront.net/assets/icons/white_arrow_btn.svg"
          alt="Scroll Right"
        />
      </div>

      {/* Dots for Indicator */}
      <div className="dots-container">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeDot === index ? "active" : ""}`}
            onClick={() =>
              scrollContainerRef.current.scrollTo({
                left: index * scrollContainerRef.current.offsetWidth,
                behavior: "smooth",
              })
            }
          ></div>
        ))}
      </div>
    </section>
  );
}

export default DiscountSection;
