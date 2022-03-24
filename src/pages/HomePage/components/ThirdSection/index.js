import React from "react";
import {styled} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import {SectionContainer, SectionTitle} from "../index";
import TrustedByImg from "./../../../../assets/images/trustedBy.svg"
import ArrowUpImg from "./../../../../assets/images/ArrowUp.svg"

const Image = styled('img')(({theme}) => ({
    zIndex: 1,
    width: "auto",
    height: 200,
    [theme.breakpoints.down('md')]: {
        padding: 20,
        height: "auto",
        width: "100%"
    },
}))

const ArrowImage = styled('img')(() => ({
    zIndex: 1,
    marginTop: 100,
    width: "auto",
    height: 50,
    cursor: "pointer",
    marginBottom: 50
}))

const SectionBg = styled('div')(({theme}) => ({
    position: "absolute",
    top: 200,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: "80vh",
    transform: "skewY(-8deg)"
}))

const StyledSectionContainer = styled(SectionContainer)(() => ({
    position: "relative",
    padding: 0,
    paddingTop: 300,
}))

export default function ThirdSection() {
    const {t} = useTranslation();
    const onArrowClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <StyledSectionContainer>
            <SectionBg/>
            <SectionTitle>{t('homePage.thirdSection.title')}</SectionTitle>
            <Image
                src={TrustedByImg}
                alt="TrustedByImg"/>
            <ArrowImage
                onClick={onArrowClick}
                src={ArrowUpImg}
                alt="Arrow-up-image"/>
        </StyledSectionContainer>
    );
}