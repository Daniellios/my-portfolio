import React from "react";
import { Jobs } from "../../constants/constants";
import {
  Section,
  SectionTitle,
  SectionText,
  ListTitle,
  SectionDates,
  SectionSubText,
  IconWrapper,
} from "../../styles/GlobalComponents";

import { IoMdArrowDropright } from "react-icons/io";
import { JobsWrapper, Job, JobTask, JobTasks } from "./ExpierienceStyles";
import useTranslation from "next-translate/useTranslation";

const Expierience = () => {
  const { t } = useTranslation("exp");

  return (
    <Section id="experience">
      <SectionTitle>{t("title")} </SectionTitle>

      <JobsWrapper>
        {Jobs.map((job, jIDX) => (
          <Job key={jIDX}>
            <ListTitle>{t(`j${jIDX}T`)}</ListTitle>
            <SectionText jobtitle>@ {job.company}</SectionText>
            <SectionDates jobtitle>{t(`j${jIDX}D`)}</SectionDates>
            <JobTasks>
              {job.tasks.map((task, tIDX) => (
                <JobTask key={jIDX + task.charAt(tIDX)}>
                  <IconWrapper>
                    <IoMdArrowDropright />
                  </IconWrapper>
                  {t(`j${jIDX}TASK${tIDX}`)}
                </JobTask>
              ))}
            </JobTasks>
          </Job>
        ))}
      </JobsWrapper>
    </Section>
  );
};

export default Expierience;
