import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { HeaderTitles } from "../../constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Container,
  NavLinksDiv,
  NavSocialIconsDiv,
  NavLink,
  SocialIcons,
  CustomHH,
  MenuIconWrapper,
  NavLinksSidebar,
  HeaderWrapper,
  LanguageWrap,
  LanguageChange,
} from "./HeaderStyles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useTranslation from "next-translate/useTranslation";

const Header = ({ isModalOpen, setIsModalOpen }) => {
  const { t, lang } = useTranslation("header");
  const handleModal = () => setIsModalOpen(!isModalOpen);
  const buttonRef = useRef(null);
  const wrapperRef = useRef();
  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 546) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useOnClickOutside(wrapperRef, () => setIsModalOpen(false));

  return (
    <Container
      as={motion.div}
      initial={{ y: -100 }}
      animate={{
        y: 0,
      }}
      transition={{ y: { duration: 0.2 } }}
    >
      <HeaderWrapper>
        {/* HEADER LINKS */}
        <NavLinksDiv>
          {HeaderTitles.map((item, index) => (
            <li key={item + index}>
              <Link href={item.link}>
                <NavLink>{t(`title${index}`)}</NavLink>
              </Link>
            </li>
          ))}
        </NavLinksDiv>
        <AnimatePresence>
          {isModalOpen && (
            <NavLinksSidebar
              ref={wrapperRef}
              as={motion.div}
              initial={
                isModalOpen ? { x: "440px", opacity: 0 } : { opacity: 1, x: 0 }
              }
              animate={
                isModalOpen
                  ? { x: 0, opacity: 1, transition: "easing" }
                  : { opacity: 0, x: "440px", transition: "easing" }
              }
              exit={{ opacity: 0, x: "440px" }}
            >
              <MenuIconWrapper
                isheader="true"
                key={"closeWrap"}
                isinsidebar="true"
                as={motion.div}
                onClick={handleModal}
                ref={buttonRef}
              >
                <AiOutlineClose size={"3rem"} />
              </MenuIconWrapper>
              {HeaderTitles.map((item, index) => (
                <li key={item + index} onClick={() => setIsModalOpen(false)}>
                  <Link href={item.link}>
                    <NavLink>{item.title}</NavLink>
                  </Link>
                </li>
              ))}
            </NavLinksSidebar>
          )}
        </AnimatePresence>

        <MenuIconWrapper
          isheader="true"
          key={"menuWrap"}
          as={motion.div}
          onClick={handleModal}
        >
          <GiHamburgerMenu size={"2.5rem"} />
        </MenuIconWrapper>

        <NavSocialIconsDiv>
          <SocialIcons
            isheader="true"
            href="https://github.com/Daniellios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons
            href="https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomHH isheader="true">hh</CustomHH>
          </SocialIcons>
        </NavSocialIconsDiv>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
