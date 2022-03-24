import React from "react";
import {FlexCol, FlexRow} from "../../../../components/Flex";
import {keyframes, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {styled} from '@mui/material/styles';
import solaX from "../../../../assets/images/solaX.png";
import solanaImg from "../../../../assets/images/solanaLogo.svg";
import headerBg from "../../../../assets/images/lightBlueBackground.png";
import CryptoItemsImg from "../../../../assets/images/CryptoItems.svg";
import LaunchAppButton from "../../../../components/buttons/LaunchApp";

const Background = styled('div')(() => ({
    backgroundImage: `url(${headerBg})`,
    marginTop: -130,
    height: "65rem",
    width: "100%",
    position: "absolute",
    transform: "skewY(-8deg)"
}))

const Container = styled(FlexCol)(({theme}) => ({
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100
}))

const TextWrapper = styled(FlexCol)(({theme}) => ({
    padding: 20,
    width: "60%",
    alignSelf: "center"
}))

const SolanaLogo = styled('img')(() => ({
    marginLeft: 10,
    width: 100,
    height: "auto"
}))

const FirstTitle = styled(Typography)(({theme}) => ({
    fontSize: 15,
    alignSelf: "center",
    color: theme.palette.common.black,
    minWidth: 104,
    [theme.breakpoints.down('sm')]: {
        fontSize: 13,
        minWidth: 90,
    }
}))

const Title = styled(Typography)(({theme}) => ({
    fontSize: 70,
    fontWeight: 900,
    color: theme.palette.common.white,
    lineHeight: 1,
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.down('lg')]: {
        fontSize: 60,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 50,
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

const SubTitle = styled(Typography)(({theme}) => ({
    fontSize: 30,
    color: theme.palette.common.white,
    [theme.breakpoints.down('lg')]: {
        fontSize: 30,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 20,
        textAlign: "center"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 15,
        textAlign: "center"
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 10,
        textAlign: "center"
    },
}))

const BigLogo = styled('img')(() => ({
    width: "30%"
}))

const moving = keyframes`
    0%{
        trnasform: translateX(0%);
    }
    100% { 
        transform: translateX(-66.6666%);  
    }
`;

const moveSlideshow = keyframes`
    100% { 
        transform: translateX(-66.6666%);  
    }
`;

const MovingContainer = styled(FlexRow)(() => ({
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    animation: `${moving} 20s linear infinite`,
    "&:hover": {
        animationPlayState: "paused"
    },
}))

const MovingWrapper = styled(FlexRow)(() => ({
    zIndex: 1,
    width: "100%",
    overflow: "hidden",
    height: 200
}))

const FloatLogo = styled('img')(({theme}) => ({
    zIndex: 1,
    position: "absolute",
    top: 300,
    right: 0,
    [theme.breakpoints.down('md')]: {
        display: "none",
    },
}))

const ImageMovingWrapper = styled(FlexRow)(() => ({
    width: "100%",
    maxWidth: "2000px",
    height: 200,
    position: "relative",
    overflow: "hidden",
    transform: "translate3d(0, 0, 0)",
}))

const MovingImage = styled('div')(() => ({
    width: " 4200px",
    background: `url(${CryptoItemsImg})`,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    transform: "translate3d(0, 0, 0)",
    animation: `${moveSlideshow} 20s linear infinite`,
    "&:hover": {
        animationPlayState: "paused"
    },
}))

export default function Header() {
    const {t} = useTranslation();
    return (
        <>
            <div>
                <Background/>
            </div>
            <Container>
                <FlexRow style={{
                    zIndex: 1
                }}>
                    <BigLogo src={solaX} alt="sola-x-big"/>
                    <TextWrapper>
                        <FlexRow>
                            <FirstTitle>
                                {t('homePage.header.poweredBy')}
                            </FirstTitle>
                            <SolanaLogo src={solanaImg} alt="solana"/>
                        </FlexRow>
                        <Title>
                            {t('homePage.header.title')}
                        </Title>
                        <SubTitle>
                            {t('homePage.header.subTitle')}
                        </SubTitle>
                    </TextWrapper>
                </FlexRow>
                <ImageMovingWrapper>
                    <MovingImage/>
                </ImageMovingWrapper>
                {/*<MovingWrapper>*/}
                {/*    <MovingContainer>*/}
                {/*        {cryptoItems.map((value, index) => {*/}
                {/*            return (*/}
                {/*                <TokenCard*/}
                {/*                    key={index}*/}
                {/*                    firstFullTokenName={value.name}*/}
                {/*                    firstShortTokenName={value.shortName}*/}
                {/*                    firstTokenImage={value.img}*/}
                {/*                    secondFullTokenName={value.secondName}*/}
                {/*                    secondShortTokenName={value.secondShortName}*/}
                {/*                    secondTokenImage={value.secondImg}*/}
                {/*                    percentage={value.percentage}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </MovingContainer>*/}
                {/*</MovingWrapper>*/}
                <FloatLogo src={solaX} alt="sola-fixed-logo"/>
                <LaunchAppButton isAppBar={false}/>
            </Container>
        </>
    );
}