import Link from "next/link"
import React from "react"
import { AiFillGithub, AiFillSlackCircle, AiFillLinkedin } from "react-icons/ai"
import { FaChessKing } from "react-icons/fa"

import {
  Container,
  NavIconDiv,
  NavLinksDiv,
  NavSocialIconsDiv,
  NavLink,
  SocialIcons,
  PortfolioDiv,
  Span,
} from "./HeaderStyles"

const Header = () => (
  <Container>
    <NavIconDiv>
      <Link href="/">
        <PortfolioDiv>
          <FaChessKing size="3rem" />
          <Span> B.D.A </Span>
        </PortfolioDiv>
      </Link>
    </NavIconDiv>

    <NavLinksDiv>
      <li>
        <Link href="#projects">
          <NavLink>Projects </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </NavLinksDiv>

    <NavSocialIconsDiv>
      <SocialIcons href="https://github.com/Daniellios">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      {/* ON Click to cope ID in slack or some shit */}
      <SocialIcons href="https://slack.com/">
        <AiFillSlackCircle size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </NavSocialIconsDiv>
  </Container>
)

export default Header
