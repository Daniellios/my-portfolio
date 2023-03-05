import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 24px 0")};
  margin: 0 auto;
  // min-height: 400px;
  max-width: 1440px;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;
  margin-top: ${(props) => (props.isHero ? "6rem" : "2rem")};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const ListContainter = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const List = styled(motion.div)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  // right: 50%;
  // // left: 50%;
  // position: absolute;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 32px 0;
  }
`;

export const ListItem = styled(motion.div)`
  // height: 40px;
  // width: 300px;

  pointer-events: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 320px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 320px;
  }
`;
