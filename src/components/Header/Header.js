import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import {
  AiFillGithub,
  AiFillSlackCircle,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai"
import { HeaderTitles } from "../../constants/constants"
import { AnimatePresence, motion } from "framer-motion"

import { GiHamburgerMenu } from "react-icons/gi"

import {
  Container,
  NavIconDiv,
  NavLinksDiv,
  NavSocialIconsDiv,
  NavLink,
  SocialIcons,
  Span,
  CustomHH,
  MenuIconWrapper,
  NavLinksSidebar,
} from "./HeaderStyles"
import useOnClickOutside from "../../hooks/useOnClickOutside"

const Header = ({ isModalOpen, setIsModalOpen }) => {
  const handleModal = () => setIsModalOpen(!isModalOpen)

  const buttonRef = useRef(null)
  const wrapperRef = useRef()

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 546) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useOnClickOutside(wrapperRef, () => setIsModalOpen(false))

  return (
    <Container isSideBarOpen>
      {/* HEADER LINKS */}
      <NavLinksDiv>
        {HeaderTitles.map((item) => (
          <li>
            <Link href={item.link}>
              <NavLink>{item.title}</NavLink>
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
            tra
            exit={{ opacity: 0, x: "440px" }}
          >
            <MenuIconWrapper
              isInSidebar
              as={motion.div}
              onClick={handleModal}
              ref={buttonRef}
            >
              <AiOutlineClose size={"3rem"} />
            </MenuIconWrapper>
            {HeaderTitles.map((item) => (
              <li onClick={() => setIsModalOpen(false)}>
                <Link href={item.link}>
                  <NavLink>{item.title}</NavLink>
                </Link>
              </li>
            ))}
          </NavLinksSidebar>
        )}
      </AnimatePresence>
      <MenuIconWrapper as={motion.div} onClick={handleModal}>
        <GiHamburgerMenu size={"3rem"} />
      </MenuIconWrapper>

      <NavSocialIconsDiv>
        <SocialIcons
          href="https://github.com/Daniellios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons
          href="https://slack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillSlackCircle size="3rem" />
        </SocialIcons>

        <SocialIcons
          href="https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomHH>hh</CustomHH>
        </SocialIcons>
      </NavSocialIconsDiv>
    </Container>
  )
}

export default Header
