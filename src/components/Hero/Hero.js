import React from "react"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Daniil Blinnikov and I am a Front-end Developer
      </SectionText>
      {/* <Button onClick={() => (window.location = "google.com")}>
        Learn More{" "}
      </Button> */}
    </LeftSection>
  </Section>
)

export default Hero
