import styled from 'styled-components';

export const JobsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 'auto';
  margin-top: 2rem;
  width: 100%;
  row-gap: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 'auto';
    gap: 3rem;
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
  }
`;

export const JobTasks = styled.ul`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const JobTask = styled.li`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
