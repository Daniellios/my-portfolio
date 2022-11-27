import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  padding: 2rem 48px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4rem auto 0 auto;

  box-sizing: content-box;
  background: ${(props) => props.theme.colors.fullblack};
  color: white;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
`;

export const ContactTitle = styled.h3`
  color: white;
`;

export const ContactContainer = styled.div`
  text-align: left;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  color: white;
`;

export const LinkItem = styled.a`
  color: white;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const Contribution = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-self: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  align-self: flex-end;

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: left;
  }
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background1};
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
