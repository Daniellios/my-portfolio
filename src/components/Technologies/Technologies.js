import React, { useEffect, useRef } from "react"
import { DiJsBadge } from "react-icons/di"
import { ImGit } from "react-icons/im"
import {
  SiTypescript,
  SiSass,
  SiNotion,
  SiReact,
  SiRedux,
} from "react-icons/si"
import {
  Section,
  SectionText,
  SectionTitle,
  ListTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
} from "./TechnologiesStyles"
import { Icon } from "@iconify/react"
import { AnimatePresence, motion, useInView } from "framer-motion"

import { listVariant, listItemVariant } from "../../framer/animations"

const Technologies = () => {
  const listRef = useRef(null)
  const isInView = useInView(listRef)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <Section id="skills">
      <br />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        Technologies that I know or have expierience with
      </SectionText>

      {/* TECH KNOWLEDGE */}
      <List
        ref={listRef}
        as={motion.ul}
        variants={listVariant}
        initial="hidden"
        animate="visible"
      >
        <ListItem>
          <DiJsBadge size="3rem" />
          <ListContainer>
            <ListTitle>JavaScript</ListTitle>
            {/* <ListParagraph>
              My main programming language and the one I have the most
              experience with.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiTypescript size="3rem" />
          <ListContainer>
            <ListTitle>TypeScript</ListTitle>
            {/* <ListParagraph>
              Essential part in every commercial project that I've ever made.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiReact size="3rem" />
          <ListContainer>
            <ListTitle>ReactJS</ListTitle>
            {/* <ListParagraph>
              Used it mostly for personal projects and as a builder for PixiJS
              projects.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiRedux size="3rem" />
          <ListContainer>
            <ListTitle>Redux</ListTitle>
            {/* <ListParagraph>
              My go to State Manager while working on projects
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <Icon icon="cib:next-js" height="30px" />
          <ListContainer>
            <ListTitle>NextJS</ListTitle>
            {/* <ListParagraph>
              My go to choice for SSR and smart bundling
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <Icon icon="logos:pixijs" height="30" />
          <ListContainer>
            <ListTitle>PixiJS</ListTitle>
            {/* <ListParagraph>
              My main tool during work at "PlaybleArt" as a playble ads
              developer.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiSass size="3rem" />
          <ListContainer>
            <ListTitle>Sass</ListTitle>
            {/* <ListParagraph>
              By far the most used CSS pre-processor of mine.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <ImGit size="3rem" />
          <ListContainer>
            <ListTitle>Git</ListTitle>
            {/* <ListParagraph>Experienced user of git.</ListParagraph> */}
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiNotion size="3rem" />
          <ListContainer>
            <ListTitle>Notion</ListTitle>
            {/* <ListParagraph>
              Used this workspace managment tool to collaborate on projects.
            </ListParagraph> */}
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}

export default Technologies
