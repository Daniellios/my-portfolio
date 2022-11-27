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
        I am a Frontend Developer, I build web applications focusing on creating
        great UI and UX
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
