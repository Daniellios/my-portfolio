import React from "react"
import Image from "next/image"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { LeftSection, RightSection, HeroSection } from "./HeroStyles"

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hi <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Daniil Blinnikov and I am a Front-end Developer
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
