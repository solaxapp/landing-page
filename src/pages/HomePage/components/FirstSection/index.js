import React, {useState} from "react";
import {FlexCol, FlexRow} from "../../../../components/Flex";
import {styled} from "@mui/material/styles";
import {Slide, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {FIRST_SECTION_CONTENT} from "./content";
import {SectionContainer, SectionTitle} from "../index";

const Card = styled(FlexCol)(({theme}) => ({
    minHeight: 400,
    height: 400,
    minWidth: 300,
    width: 300,
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer"
}))

const CardImage = styled('img')(() => ({
    marginBottom: 50,
    height: 100,
    minHeight: 100,
    width: "auto",
    maxWidth: 200,
    alignSelf: "center"
}))

const Text = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "initial",
}))

const TextWrapper = styled(FlexRow)(({theme}) => ({
    background: theme.palette.common.green,
    width: "100%",
    height: "100%",
    padding: 30,
    borderRadius: 10,
}))

const CardTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontSize: 25,
    paddingTop: 20,
    fontWeight: "bold",
    alignSelf: "center",
    minHeight: 100
}))

const SectionBg = styled('div')(({theme}) => ({
    position: "absolute",
    top: 50,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: "90vh",
    transform: "skewY(-8deg)"
}))

const StyledSectionContainer = styled(SectionContainer)(({theme}) => ({
    position: "relative",
    padding: 0,
    paddingTop: 400,
    [theme.breakpoints.down('md')]: {
        paddingTop: 150,
    }
}))

const CardWrapper = styled(FlexRow)(({theme}) => ({
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        flexWrap: "wrap",
        justifyContent: "center"
    },
}))

export default function FirstSection() {
    const {t} = useTranslation();
    return (
        <StyledSectionContainer>
            <SectionBg/>
            <SectionTitle>{t('homePage.firstSection.title')}</SectionTitle>
            <CardWrapper>
                {FIRST_SECTION_CONTENT(t).map((value, index) => {
                    return (
                        <CardItem
                            key={`first-section-card-${index}`}
                            {...value}
                        />
                    )
                })}
            </CardWrapper>
        </StyledSectionContainer>
    );
}

function CardItem({image, title, text}) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = React.useRef(null);

    const onMouseEnter = () => {
        setIsHovered(true)
    }

    const onMouseExit = () => {
        setIsHovered(false)
    }

    return (
        <Card
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseExit}>
            {isHovered ?
                <Slide
                    direction="down"
                    in={isHovered}
                    container={containerRef.current}>
                    <TextWrapper>
                        <Text>{text}</Text>
                    </TextWrapper>
                </Slide> :
                <CardImage src={image} alt={title}/>
            }
            <CardTitle>{title}</CardTitle>
        </Card>
    )
}