import React, { useState, useRef, useEffect } from "react"

import {
  CarouselItemText,
  CarouselItemTitle,
  InnerSliderContainer,
  SliderContainer,
  SliderItem,
} from "./TimeLineStyles"
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { TimeLineData } from "../../constants/constants"

const Timeline = () => {
  const carouselRef = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, [])

  return (
    <Section id="about">
      <br />
      <SectionTitle>About Me </SectionTitle>
      <SectionText>
        Here you can see the key moments of my professional journey relevant to
        the field.
      </SectionText>

      <SliderContainer ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
        <InnerSliderContainer
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {TimeLineData.map((item, index) => (
            <SliderItem key={index}>
              <CarouselItemTitle>{item.year}</CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </SliderItem>
          ))}
        </InnerSliderContainer>
      </SliderContainer>
    </Section>
  )
}

export default Timeline
