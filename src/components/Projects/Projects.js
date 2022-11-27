import React from "react";
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
  Hr,
  UtilityList,
  ImgContainer,
} from "./ProjectsStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, images, title, isGame, description, tags, source, visit }) => (
            <BlogCard key={id} as={motion.div} whileHover={{ scale: 1.01 }}>
              <ImgContainer>
                <Image
                  src={images[0]}
                  alt="project image"
                  width={432}
                  height={220}
                  style={{ borderRadius: " 10px 10px 0 0" }}
                ></Image>
              </ImgContainer>
              <TitleContent>
                <HeaderThree title="true">{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <TagsContainer>
                <Hr></Hr>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </TagsContainer>

              <UtilityList>
                {isGame ? (
                  <>
                    <ExternalLinks
                      target="_blank"
                      rel="noopener noreferrer"
                      href={visit}
                    >
                      Source
                    </ExternalLinks>
                    <ExternalLinks
                      rel="noopener noreferrer"
                      href={source}
                      target="_blank"
                    >
                      Play!
                    </ExternalLinks>
                  </>
                ) : (
                  <>
                    <ExternalLinks
                      target="_blank"
                      rel="noopener noreferrer"
                      href={source}
                    >
                      Code
                    </ExternalLinks>
                    <ExternalLinks
                      target="_blank"
                      rel="noopener noreferrer"
                      href={visit}
                    >
                      Visit
                    </ExternalLinks>
                  </>
                )}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
