import React from "react";

import {
  Section,
  SectionText,
  MainHeader,
  TopHello,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section isHero>
    <LeftSection>
      <TopHello>Hi, my name is</TopHello>
      <MainHeader main center>
        Daniil Blinnikov
      </MainHeader>
      <SectionText>
        I am Frontend Developer, I build high quality web applications.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
