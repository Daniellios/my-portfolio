import React from "react"
import { Jobs } from "../../constants/constants"
import {
  Section,
  SectionTitle,
  SectionText,
  ListTitle,
  SectionSubText,
  IconWrapper,
} from "../../styles/GlobalComponents"

import { IoMdArrowDropright } from "react-icons/io"
import { JobsWrapper, Job, JobTask, JobTasks } from "./ExpierienceStyles"

const Expierience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience </SectionTitle>

      <JobsWrapper>
        {Jobs.map((job, index) => (
          <Job key={index}>
            <ListTitle>{job.title}</ListTitle>
            <SectionText jobtitle>at {job.company}</SectionText>
            <JobTasks>
              {job.tasks.map((task, index) => (
                <JobTask key={index + task.charAt(index)}>
                  <IconWrapper>
                    <IoMdArrowDropright />
                  </IconWrapper>
                  {task}
                </JobTask>
              ))}
            </JobTasks>
          </Job>
        ))}
      </JobsWrapper>
    </Section>
  )
}

export default Expierience
