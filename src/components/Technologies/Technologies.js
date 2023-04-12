import React, { useEffect, useRef } from "react";

import { SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListItem, Section } from "./TechnologiesStyles";

import useTranslation from "next-translate/useTranslation";
import { TechIcons } from "../../constants/constants";

const Technologies = () => {
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
              animate={["initialHide", "animate"]}
              variants={{
                initial: {
                  translateX: 0,
                  opacity: 0.3,
                },
                initialHide: {
                  opacity: 1,
                },
                animate: {
                  translateX: idx % 2 === 0 ? -100 : 100,
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    delay: idx % 2 === 0 ? 0.1 + idx / 2 : 0.2 + idx / 4,
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
