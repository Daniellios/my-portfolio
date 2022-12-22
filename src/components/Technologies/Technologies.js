import React, { useEffect, useRef } from "react";
import { DiJsBadge } from "react-icons/di";
import { ImGit } from "react-icons/im";
import {
  SiTypescript,
  SiSass,
  SiNotion,
  SiReact,
  SiRedux,
} from "react-icons/si";
import {
  Section,
  SectionText,
  SectionTitle,
  ListTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
} from "./TechnologiesStyles";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import { listVariant, listItemVariant } from "../../framer/animations";
import useTranslation from "next-translate/useTranslation";

const Technologies = () => {
  const listRef = useRef(null);
  const { t } = useTranslation("skills");

  const isInView = useInView(listRef);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <Section id="skills">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionText>{t("desc")}</SectionText>

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
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiTypescript size="3rem" />
          <ListContainer>
            <ListTitle>TypeScript</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiReact size="3rem" />
          <ListContainer>
            <ListTitle>ReactJS</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiRedux size="3rem" />
          <ListContainer>
            <ListTitle>Redux</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <Icon icon="cib:next-js" height="30px" />
          <ListContainer>
            <ListTitle>NextJS</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <Icon icon="logos:pixijs" height="30" />
          <ListContainer>
            <ListTitle>PixiJS</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <SiSass size="3rem" />
          <ListContainer>
            <ListTitle>Sass</ListTitle>
          </ListContainer>
        </ListItem>

        <ListItem>
          <ImGit size="3rem" />
          <ListContainer>
            <ListTitle>Git</ListTitle>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
