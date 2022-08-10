import React from "react"
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
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, images, title, isGame, description, tags, source, visit }) => (
            <BlogCard key={id} as={motion.div} whileHover={{ scale: 1.01 }}>
              <ImgContainer>
                {images.length > 1 ? (
                  images.map((img) => <Img src={img} alt="project image" />)
                ) : (
                  <Img src={images.at(0)} alt="project image" />
                )}
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
                {isGame ? (
                  <ExternalLinks
                    rel="noopener noreferrer"
                    href={source}
                    target="_blank"
                    // onClick={() => window.open(source, "_blank")}
                  >
                    Play!
                  </ExternalLinks>
                ) : (
                  <ExternalLinks
                    target="_blank"
                    rel="noopener noreferrer"
                    href={visit}
                  >
                    Visit
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  )
}

export default Projects
