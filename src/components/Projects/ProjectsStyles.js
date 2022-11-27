import styled from "styled-components";

import { motion } from "framer-motion";

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 220px;
  object-fit: fill;
  border-radius: 10px 10px 0 0;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 2rem;
  place-items: center;
  align-items: flex-start;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding: 1rem;
  }
`;
export const BlogCard = styled(motion.div)`
  border-radius: ${(props) => props.theme.sizes.border};
  text-align: center;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 400px;
  padding-bottom: 1rem;
  background: ${(props) => props.theme.colors.background1};
  border: 1px solid black;
  cursor: pointer;
  flex-basis: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 400px;
  }
`;
export const TitleContent = styled(motion.div)`
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.black};
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0 auto 1rem auto;
  border: 0;
  background-color: ${(props) => props.theme.colors.black}; ;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 25px;
  color: ${(props) => props.theme.colors.primary1};
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.black};
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  background: #c0c8ca;
  border-radius: ${(props) => props.theme.sizes.border};
  transition: 0.5s;
  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.6rem 1rem;
  }
`;

export const TagsContainer = styled.div``;

export const TagList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 0rem 2rem 0 2rem;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.black};
`;
