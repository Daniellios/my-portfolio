import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 0;
  gap: 2rem;
  margin: 0 auto;
  max-width: 1040px;
  padding: 0 2rem 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 100%;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;

    padding: 2rem 0 0 0;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 0 0;

    align-items: center;
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-self: right;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-radius: 50%;
`;
