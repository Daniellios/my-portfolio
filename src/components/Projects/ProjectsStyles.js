import styled from "styled-components"

import { motion } from "framer-motion"

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 220px;
  object-fit: fill;
  border-radius: 10px 10px 0 0;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  align-items: flex-start;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled(motion.div)`
  border-radius: 10px;
  text-align: center;
  width: 400px;
  padding-bottom: 1rem;
  background: ${(props) => props.theme.colors.background1};
  border: 1px solid black;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TitleContent = styled(motion.div)`
  text-align: center;
  text-transform: uppercase;
  z-index: 20;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  padding: 10px 0;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.black};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #a24124;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

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
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 0 0;
  padding-top: 2rem;
`

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #c0c8ca;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }
`

export const TagsContainer = styled.div`
  margin-top: 2rem;
`

export const TagList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  padding: 2rem 2rem 0 2rem;
`
export const Tag = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
`
