import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.fullblack};
  padding: 1rem 2rem 1rem 2rem;
  z-index: 10;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.large} {
    position: absolute;
    width: inherit;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    justify-content: flex-end;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1980px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.xsm} {
    justify-content: flex-end;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

export const PortfolioDiv = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1rem;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;
`;

export const MenuIconWrapper = styled(motion.div)`
  position: ${(props) => (props.isinsidebar ? "absolute" : "unset")};
  top: ${(props) => (props.isinsidebar ? "2rem" : "unset")};
  right: ${(props) => (props.isinsidebar ? "2rem" : "unset")};
  color: ${(props) =>
    props.isheader
      ? props.theme.colors.background1
      : props.theme.colors.fullblack};
  display: none;
  align-items: center;
  width: 28px;
  height: 28px;
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
`;

export const NavLinksDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: none;
  }
`;

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
  background: ${(props) => props.theme.colors.fullblack};

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: flex;
  }
`;

export const NavSocialIconsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1rem;
  line-height: 32px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.background1};
  transition: 0.4s ease;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const LanguageWrap = styled.div`
  position: absolute;
  width: 100%;
  justify-content: end;
  padding-right: 2rem;
  display: flex;
  top: 0;
  left: 0;
  pointer-events: none;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  gap: 0.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 2rem;
    z-index: 10;
    position: fixed;
  }

  @media ${(props) => props.theme.breakpoints.xsm} {
    left: 1rem;
    justify-content: start;
  }
`;

export const LanguageChange = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  pointer-events: all;
  width: 2rem;
  height: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: black;
  transition: 0.2s ease;
  color: ${(props) => (props.isCurrent ? props.theme.colors.hover : "black")};
  border-radius: 50%;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    color: ${(props) => (props.isCurrent ? props.theme.colors.hover : "white")};
    font-size: 1rem;
  }
`;

export const CustomHH = styled.div`
  transition: 0.3s ease;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background1};
  &:hover {
    background: ${(props) => props.theme.colors.hover};
    transform: scale(1.01);
    cursor: pointer;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  color: ${(props) => props.theme.colors.background1};
  border-radius: 50px;
  padding: 4px;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    transform: scale(1.2);
    cursor: pointer;
  }
`;
