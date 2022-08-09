import React from "react"
import Image from "next/image"

import {
  Section,
  SectionText,
  SectionTitle,
  TopHello,
} from "../../styles/GlobalComponents"
import { LeftSection, RightSection, HeroSection } from "./HeroStyles"

const Hero = () => (
  <Section isHero>
    <LeftSection>
      <TopHello>Hi, my name is</TopHello>
      <SectionTitle main center>
        Daniil Blinnikov
      </SectionTitle>
      <SectionText>
        I am a Frontend Developer, I build web applications focusing on creating
        great UI and UX
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
