import React, { useEffect, useRef, useState } from "react";
import "../styles/Clients.css";

const clientList = [
  { name: "Biocon", logo: "/logos/biocon.png" },
  { name: "PhonePe", logo: "/logos/phonepe.png" },
  { name: "Syngene", logo: "/logos/syngene.png" },
  { name: "Tata Power", logo: "/logos/tatapower.png" },
  { name: "Biocon", logo: "/logos/biocon.png" },
  { name: "PhonePe", logo: "/logos/phonepe.png" },
  { name: "Syngene", logo: "/logos/syngene.png" },
  { name: "Tata Power", logo: "/logos/tatapower.png" },
  { name: "Syngene", logo: "/logos/syngene.png" },
];

const Clients = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const scrollAmount = index * (160 + 32); // 160px logo width + 32px gap
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (clientList.length - visibleCount + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (clientList.length - visibleCount + 1)) % (clientList.length - visibleCount + 1));
  };

  useEffect(() => {
    const autoScroll = setInterval(handleNext, 2500);
    return () => clearInterval(autoScroll);
  }, []);

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={handlePrev}>&#8249;</button>
          <div className="client-carousel" ref={scrollRef}>
            {clientList.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="client-logo"
                title={client.name}
              />
            ))}
          </div>
          <button className="carousel-btn right" onClick={handleNext}>&#8250;</button>
        </div>
      </div>
    </section>
  );
};

export default Clients;