import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { AiFillGithub, AiOutlineClose } from "react-icons/ai"
import { HeaderTitles } from "../../constants/constants"
import { AnimatePresence, motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import {
  Container,
  NavLinksDiv,
  NavSocialIconsDiv,
  NavLink,
  SocialIcons,
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
    <Container as={motion.div}>
      {/* HEADER LINKS */}
      <NavLinksDiv>
        {HeaderTitles.map((item, index) => (
          <li key={item + index}>
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
            exit={{ opacity: 0, x: "440px" }}
          >
            <MenuIconWrapper
              isHeader
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
        isHeader
        key={"menuWrap"}
        as={motion.div}
        onClick={handleModal}
      >
        <GiHamburgerMenu size={"3rem"} />
      </MenuIconWrapper>

      <NavSocialIconsDiv>
        <SocialIcons
          isHeader
          href="https://github.com/Daniellios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomHH isHeader>hh</CustomHH>
        </SocialIcons>
      </NavSocialIconsDiv>
    </Container>
  )
}

export default Header
