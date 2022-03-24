import React from "react";
import {styled} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import {SectionContainer} from "../index";
import {Button, Typography} from "@mui/material";
import headerBg from "../../../../assets/images/lightBlueBackground.png";
import DollarImg from "../../../../assets/images/dollar.svg";
import {CenteredRow} from "../../../../components/Flex";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";

const SectionBg = styled('div')(({theme}) => ({
    position: "absolute",
    top: -150,
    backgroundImage: `url(${headerBg})`,
    width: "100%",
    height: "120vh",
    transform: "skewY(-8deg)"
}))

const StyledSectionContainer = styled(SectionContainer)(() => ({
    position: "relative",
    padding: 0,
}))

const DollarImage = styled('img')(({theme}) => ({
    height: 80,
    width: "auto",
    marginRight: 5,
    [theme.breakpoints.down('lg')]: {
        height: 70,
    },
    [theme.breakpoints.down('md')]: {
        height: 60
    },
    [theme.breakpoints.down('sm')]: {
        height: 50,
    },
    [theme.breakpoints.down('xs')]: {
        height: 30,
    },
}))

const TitleWrapper = styled(CenteredRow)(() => ({
    paddingTop: 20,
    zIndex: 1,
    alignItems: "center",
}))

const Title = styled(Typography)(({theme}) => ({
    fontSize: 80,
    fontWeight: "bold",
    color: theme.palette.common.white,
    paddingBottom: 20,
    paddingTop: 20,
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
        fontSize: 70,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 60,
        textAlign: "center"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        textAlign: "center"
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 20,
        textAlign: "center"
    },
}))


const StyledButton = styled(Button)(({theme}) => ({
    fontSize: 20,
    borderRadius: 25,
    padding: "20px 80px",
    fontWeight: "bold",
    ":hover": {
        backgroundColor: theme.palette.common.white,
        color: "#00B4B4"
    },
    [theme.breakpoints.down('lg')]: {
        padding: "10px 70px",
    },
    [theme.breakpoints.down('md')]: {
        padding: "5px 50px",
    },
    [theme.breakpoints.down('sm')]: {
        padding: "10px 20px",
    },
}))

export default function SaxTokenSection() {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(ROUTES.SAX_TOKEN_ROUTE);
    }

    return (
        <StyledSectionContainer>
            <SectionBg/>
            <TitleWrapper>
                <DollarImage src={DollarImg} alt="dollar-image"/>
                <Title>{t('homePage.saxTokenSection.title')}</Title>
            </TitleWrapper>
            <StyledButton
                onClick={handleButtonClick}
                variant="contained">{t('homePage.saxTokenSection.button')}</StyledButton>
        </StyledSectionContainer>
    );
}