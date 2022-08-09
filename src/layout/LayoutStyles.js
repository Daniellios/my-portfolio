import { motion } from "framer-motion"
import styled from "styled-components"

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
  position: relative;
`

export const ShadowOverlay = styled(motion.div)`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  overflow-y: hidden;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`

export const Main = styled.main``
