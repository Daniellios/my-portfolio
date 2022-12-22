import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Section,
  SectionText,
  MainHeader,
  TopHello,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";
import { LanguageChange, LanguageWrap } from "../Header/HeaderStyles";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation("hero");
  const router = useRouter();

  return (
    <Section isHero>
      <LanguageWrap
        as={motion.div}
        initial={{ y: -100, opacity: 0.3 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ y: { duration: 0.2 } }}
      >
        <Link href="/" locale="ru">
          <LanguageChange isCurrent={router.locale === "ru" ? true : false}>
            RU
          </LanguageChange>
        </Link>
        <Link href="/" locale="en">
          <LanguageChange isCurrent={router.locale === "en" ? true : false}>
            EN
          </LanguageChange>
        </Link>
      </LanguageWrap>

      <LeftSection>
        <TopHello>{t("welcome")}</TopHello>
        <MainHeader main center>
          {t("fullName")}
        </MainHeader>
        <SectionText>{t("description")}</SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
