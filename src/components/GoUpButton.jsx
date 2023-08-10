import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolling down the page
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-12 right-10 ${
        showButton ? "block" : "hidden"
      } cursor-pointer`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp size={60} color="#1388b6" />
    </div>
  );
};

export default GoUpButton;
