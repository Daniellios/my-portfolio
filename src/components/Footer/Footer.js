import React from "react"
import { AiFillGithub, AiFillSlackCircle, AiFillLinkedin } from "react-icons/ai"
import { FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import { SocialIcons, CustomHH } from "../Header/HeaderStyles"
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Contribution,
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper id="contacts">
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href="tel:7-977-452-62-17">+7-977-452-62-17 </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href="mailto:danielo49134@gmail.com">
            danielo49134@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Contact me!</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons
            href="https://github.com/Daniellios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons
            href="mailto:danielo49134@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size="3rem" />
          </SocialIcons>

          <SocialIcons
            href="https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomHH>hh</CustomHH>
          </SocialIcons>
          <SocialIcons
            href="https://t.me/D_A_N_Y_A_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <Contribution href="https://github.com/Daniellios/my-portfolio">
        Designed & Built by Daniil Blinnikov
      </Contribution>
    </FooterWrapper>
  )
}

export default Footer
