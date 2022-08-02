import React, { useState, useRef, useEffect } from "react"
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  TagsContainer,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer,
} from "./ProjectsStyles"
import { Section, SectionTitle } from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <ImgContainer>
                <Img src={image} />
              </ImgContainer>

              <TitleContent>
                <HeaderThree title="true">{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <TagsContainer>
                <HeaderThree>Stack</HeaderThree>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </TagsContainer>

              <UtilityList>
                {source && (
                  <ExternalLinks
                    target="_blank"
                    rel="noopener noreferrer"
                    href={visit}
                  >
                    Code
                  </ExternalLinks>
                )}
                <ExternalLinks
                  target="_blank"
                  rel="noopener noreferrer"
                  href={visit}
                >
                  Source
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  )
}

export default Projects
