import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  /* position: fixed;
  width: inherit;
  max-width: inherit; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background1};
  padding: 1rem 2rem 1rem 2rem;
  z-index: 10;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    justify-content: flex-end;
  }
`

export const Span = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`

export const PortfolioDiv = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1rem;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;
`

export const MenuIconWrapper = styled(motion.div)`
  position: ${(props) => (props.isInSidebar ? "absolute" : "unset")};
  top: ${(props) => (props.isInSidebar ? "2rem" : "unset")};
  right: ${(props) => (props.isInSidebar ? "2rem" : "unset")};
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hover};
  }

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: flex;
    justify-self: center;
  }
`

export const NavLinksDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: none;
  }
`

export const NavLinksSidebar = styled(motion.div)`
  display: none;
  width: 80%;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  padding: 2rem;
  flex-direction: column;
  z-index: 10;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: ${(props) => props.theme.colors.background1};

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: flex;
  }
`

export const NavSocialIconsDiv = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.black};
  transition: 0.4s ease;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`

export const CustomHH = styled.div`
  transition: 0.3s ease;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  background: #262323;
  &:hover {
    background: ${(props) => props.theme.colors.hover};
    transform: scale(1.01);
    cursor: pointer;
  }
`

// Social Icons

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.black};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    transform: scale(1.2);
    cursor: pointer;
  }
`
