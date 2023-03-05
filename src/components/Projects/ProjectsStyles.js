import styled from "styled-components";

import { motion } from "framer-motion";

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 220px;
  overflow: hidden;
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
    padding: 0;
  }
`;

export const BlogCard = styled(motion.div)`
  border-radius: ${(props) => props.theme.sizes.border};
  text-align: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 400px;
  height: 550px;
  padding-bottom: 1rem;
  -webkit-box-shadow: 0px 3px 15px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 15px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 15px 2px rgba(0, 0, 0, 0.3);

  background: ${(props) => props.theme.colors.background1};
  /* border: 1px solid black; */
  cursor: pointer;
  flex-basis: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 300px;
  }
`;
export const TitleContent = styled(motion.div)`
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
`;

export const HeaderThree = styled.h3`
  font-size: 1.3em;
  min-height: 2.6em;
  max-height: 2.6em;
  line-height: 1.3;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  vertical-align: middle;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.black};
`;

export const CardInfo = styled.p`
  width: 100%;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  min-height: 4.125em;
  max-height: 4.125em;
  padding: 0 25px;
  color: ${(props) => props.theme.colors.primary1};
  line-height: 1.375;
  -webkit-line-clamp: 3;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0 auto 1rem auto;
  border: 0;
  opacity: 50%;
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
  column-gap: 8px;
  justify-content: space-around;
  max-height: 3.6em;
  min-height: 3.6em;

  padding: 0rem 2rem 0 2rem;
`;

export const Tag = styled.li`
  line-height: 1.2em;
  height: 1.2em;
  color: ${(props) => props.theme.colors.black};
`;
