import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 24px 0")};
  margin: 0 auto;
  max-width: 1440px;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;
  margin-top: ${(props) => (props.isHero ? "6rem" : "2rem")};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const TopHello = styled.h3`
  padding-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: left;
  }
`;

export const MainHeader = styled.h1`
  font-weight: 800;
  text-align: left;
  color: ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: left;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.black};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "0 0 0" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    text-align: left;
    padding: ${(props) => (props.main ? "0 0 0" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SubSectionTitle = styled.h3`
  font-weight: 600;
  font-size: ${(props) => (props.main ? "50px" : "36px")};
  line-height: ${(props) => (props.main ? "54px" : "36px")};
  width: max-content;
  max-width: 100%;
  align-self: ${(props) => (props.center ? "center" : "left")};
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.black};
  -webkit-background-clip: text;
  background-clip: text;
  // -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "40px" : "30px")};
    line-height: ${(props) => (props.main ? "40px" : "30px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "24px")};
    line-height: ${(props) => (props.main ? "32px" : "32px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  padding-bottom: ${(props) => (props.jobtitle ? "1rem" : "3.6rem")};
  text-align: left;
  color: ${(props) =>
    props.jobtitle
      ? props.theme.colors.palette.darkOrange
      : props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: ${(props) => (props.jobtitle ? "0" : "24px")};
    text-align: left;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding-bottom: ${(props) => (props.jobtitle ? "0" : "1rem")};
  }
`;

export const SectionDates = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  padding-bottom: 0;
  text-align: left;
  color: ${(props) =>
    props.jobtitle
      ? props.theme.colors.palette.darkOrange
      : props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.palette.lightOrange};
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;
