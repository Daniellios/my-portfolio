import React, { useEffect, useRef } from "react";

import { SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListItem, Section } from "./TechnologiesStyles";

import useTranslation from "next-translate/useTranslation";
import { TechIcons } from "../../constants/constants";

const Technologies = () => {
  const listRef = useRef(null);
  const { t } = useTranslation("skills");

  return (
    <Section id="skills">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionText>{t("desc")}</SectionText>

      {/* TECH KNOWLEDGE */}
      <List>
        {TechIcons.map((icon, idx) => {
          return (
            <ListItem
              key={idx}
              initial="initial"
              animate={["animate", "initialHide"]}
              variants={{
                initial: {
                  opacity: 0.2,
                },
                initialHide: {
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                  },
                },
                animate: {
                  translateX: -100,
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    delay: idx / 2 + 0.2,
                    repeatType: "reverse",
                    ease: "linear",
                  },
                },
              }}
            >
              {icon}
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

export default Technologies;
