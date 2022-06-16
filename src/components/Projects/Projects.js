import React, { useState, useRef, useEffect } from "react"
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  TagsContainer,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer,
  ImgShadow,
} from "./ProjectsStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionTitle main> Projects </SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <ImgContainer>
                <Img src={image} />
                <ImgShadow />
              </ImgContainer>

              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <TagsContainer>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </TagsContainer>

              <UtilityList>
                {/* <ExternalLinks href={visit}>Code </ExternalLinks> */}
                <ExternalLinks href={visit}>Source </ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  )
}

export default Projects
