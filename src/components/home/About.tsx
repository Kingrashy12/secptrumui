import { HeroBg, ReactImage } from "@/assets";
import React from "react";
import styled from "styled-components";
import Typography from "../custom/Typography";
import { Box, Button, colors } from "secptrum-ui";
import Media from "../custom/Media";
import { fontNunito, fontOff } from "@/styles/global";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { sidebarlinks } from "@/data/sidebar";

const Hero_About = () => {
  return (
    <Hero>
      <Typography as="h1" font="nunito">
        SecptrumUI
      </Typography>
      <TagWrapper>
        <Typography font="off" className="built">
          Built for
        </Typography>
        <ReactLogo src={ReactImage.src} />
        <Typography font="off" className="built">
          React
        </Typography>
      </TagWrapper>
      <Typography font="nunito">
        Create stunning, responsive UIs with ease.
      </Typography>
      <BTN>
        <Link href="/docs/getting-started">
          <Button className={fontOff.className} radius="lg">
            Get started
          </Button>
        </Link>
        <Link href={sidebarlinks[1].links[0].uri}>
          <Button
            icon={RiArrowRightUpLine}
            radius="lg"
            variant="outline"
            iconPosition="right"
            className="out_line"
          >
            Components
          </Button>
        </Link>
      </BTN>
    </Hero>
  );
};

export default Hero_About;

const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBg.src});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  h1 {
    font-size: 70px;
    color: white;
    font-weight: 600;
  }
  p {
    font-weight: 600;
    color: white;
  }
  .built {
    font-weight: 400;
    text-transform: uppercase;
    color: #dbd6d6;
  }

  @media screen and (max-width: 550px) {
    height: 100vh;

    h1 {
      font-size: 40px;
    }
  }
`;

const TagWrapper = styled(Box)`
  align-items: center;
  gap: 4px;
`;

const ReactLogo = styled(Media)`
  width: 25px;
  height: 25px;
`;

const BTN = styled(Box)`
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  a {
    text-decoration: none;
  }

  button {
    width: 130px;
    z-index: 10;
    ${fontNunito.style};
  }
`;
