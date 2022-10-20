import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1440px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.primary};
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
  margin-right: auto;

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

export const Slogan = styled.p`
  color: ${(props) => props.theme.colors.primary};
  min-width: 280px;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;

  text-align: left;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 18px;
    min-width: 100px;
    text-align: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  /* display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px)); */
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
  padding: 40px 0 28px;

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
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
