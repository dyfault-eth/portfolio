import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200;

    if (scrollY > scrollThreshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <IconButton
        icon={<FaArrowUp />}
        isRound
        size="lg"
        colorScheme="teal"
        aria-label="Scroll To Top"
        position="fixed"
        bottom="20px"
        right="20px"
        onClick={handleScrollToTop}
      />
    )
  );
};
