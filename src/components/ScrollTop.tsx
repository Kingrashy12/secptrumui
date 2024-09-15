import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FloatingButton } from "secptrum-ui";
import styled from "styled-components";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document?.documentElement?.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    global?.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  global?.window?.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible && (
        <Float onClick={scrollToTop}>
          <IoIosArrowUp color="white" />
        </Float>
      )}
    </>
  );
};

export default ScrollTop;

const Float = styled(FloatingButton)``;
