import useTranslation from "next-translate/useTranslation";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { SocialIcons, CustomHH } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  FooterContainer,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Contribution,
  ContactTitle,
  ContactContainer,
} from "./FooterStyles";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <FooterWrapper id="contacts">
      <FooterContainer>
        <ContactContainer>
          <ContactTitle>{t("contact")}</ContactTitle>
          <LinkList>
            <LinkColumn>
              <LinkTitle>{t("call")} </LinkTitle>
              <LinkItem href="tel:7-977-452-62-17">+7-977-452-62-17 </LinkItem>
            </LinkColumn>

            <LinkColumn>
              <LinkTitle>{t("email")}</LinkTitle>
              <LinkItem href="mailto:danielo49134@gmail.com">
                danielo49134@gmail.com
              </LinkItem>
            </LinkColumn>
          </LinkList>
        </ContactContainer>

        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons
              href="https://github.com/Daniellios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="2rem" />
            </SocialIcons>

            <SocialIcons
              href="mailto:danielo49134@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size="2rem" />
            </SocialIcons>

            <SocialIcons
              href="https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomHH>hh</CustomHH>
            </SocialIcons>
            <SocialIcons
              href="https://t.me/DaBlinni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size="2rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
        <Contribution href="https://github.com/Daniellios/my-portfolio">
          Designed & Built by Daniil Blinnikov
        </Contribution>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
