import React from "react";
import {FlexCol, FlexRow} from "../../../../components/Flex";
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {SectionContainer, SectionTitle} from "../index";

const Card = styled(FlexRow)(() => ({
    width: "100%",
    padding: 20,
    margin: 10,
    maxWidth: 1000,
    minHeight: 350,
    zIndex: 1
}))

const Column = styled(FlexCol)(() => ({
    width: "50%",
    padding: 40
}))

const FirstColumn = styled(Column)(({theme}) => ({
    backgroundColor: "#192340",
    paddingLeft: 55,
    paddingRight: 80,
    borderRadius: "10px 0px 0px 10px",
    boxShadow: "15px 15px 15px #00000029",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        padding: 20
    }
}))

const SecondColumn = styled(Column)(({theme}) => ({
    backgroundColor: "#FF9999",
    borderRadius: "10px",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

const CardText = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontSize: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('lg')]: {
        fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 16,
        textAlign: "center"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 15,
        textAlign: "center"
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 14,
        textAlign: "center"
    },
}))

const CardTitle = styled(Typography)(({theme}) => ({
    color: "#FF9999",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
    [theme.breakpoints.down('lg')]: {
        fontSize: 30,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 25,
        textAlign: "center"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        textAlign: "center"
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 15,
        textAlign: "center"
    },
}))

const SectionBg = styled('div')(({theme}) => ({
    position: "absolute",
    top: -50,
    backgroundColor: "#ab9fe7",
    width: "100%",
    height: "80vh",
    transform: "skewY(-8deg)"
}))

const SecondSectionBg = styled('div')(({theme}) => ({
    position: "absolute",
    top: "50vh",
    backgroundColor: "#192337",
    width: "100%",
    height: "200vh",
    transform: "skewY(-8deg)",
    [theme.breakpoints.down('md')]: {
        top: 100,
    }
}))

const StyledSectionContainer = styled(SectionContainer)(({theme}) => ({
    position: "relative",
    paddingTop: 200,
    [theme.breakpoints.down('md')]: {
        padding: 40,
        paddingTop: 150
    }
}))

const StyledSectionTitle = styled(SectionTitle)(({theme}) => ({
    color: theme.palette.common.white,
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

export default function SecondSection() {
    const {t} = useTranslation();
    return (
        <StyledSectionContainer>
            <SectionBg/>
            <SecondSectionBg/>
            <StyledSectionTitle>{t('homePage.secondSection.title')}</StyledSectionTitle>
            {t('homePage.secondSection.cards', {returnObjects: true}).map((value, index) => {
                return (
                    <Card key={`first-section-card-${index}`}>
                        <FirstColumn>
                            <CardTitle>{value.title}</CardTitle>
                            <CardText>
                                {value.text}
                            </CardText>
                        </FirstColumn>
                        <SecondColumn/>
                    </Card>
                )
            })}
        </StyledSectionContainer>
    );
}