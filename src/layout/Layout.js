import React, { useContext, useState } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Container, ShadowOverlay, Main } from "./LayoutStyles"
import { AnimatePresence, motion } from "framer-motion"

export const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const bodyBlocker = () => {
    const body = document.getElementsByTagName("body")
    isModalOpen
      ? (body[0].style.overflow = "hidden")
      : (body[0].style.overflow = "unset")
  }

  bodyBlocker()

  return (
    <Container>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Main>{children}</Main>
      <Footer />
      <AnimatePresence>
        {isModalOpen && (
          <ShadowOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </Container>
  )
}
