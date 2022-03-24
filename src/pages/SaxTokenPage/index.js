import React, {useState} from "react";
import {CenteredCol, CenteredRow, FlexCol, FlexRow, PageContainer} from "../../components/Flex";
import {styled} from "@mui/material/styles";
import {Button, LinearProgress, linearProgressClasses, Table, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import DollarImg from "../../assets/images/dollar.svg";
import LightBlueBg from "../../assets/images/lightBlueBackground.png";
import ArrowUpImg from "../../assets/images/ArrowUp.svg";
import {charData} from "./ChartData";
import {Cell, Label, Pie, PieChart, ResponsiveContainer, Sector} from 'recharts';
import LaunchAppButton from "../../components/buttons/LaunchApp";
import whitePaper from "../../assets/whitepaper/SOLA-X Whitepaper v.1.0.pdf"
import {A} from "../../components/A";
import {SectionTitle} from "../HomePage/components";

//TODO ADD SOLAX LOGO ON BOTTOM PAGE, AND DO RESPONSIVE

const StyledPageContainer = styled(PageContainer)(({theme}) => ({
    position: "relative",
    zIndex: 1,
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down('md')]: {
        paddingLeft: 20,
        paddingRight: 20,
    }
}))

const BackgroundLightBlue = styled('div')(() => ({
    width: "100%",
    minHeight: "70rem",
    height: "120%",
    position: "absolute",
    backgroundImage: `url(${LightBlueBg})`,
    transform: "skewY(-11deg)"
}))

const BackgroundDarkBlue = styled('div')(({theme}) => ({
    // marginTop: "-80px",
    marginTop: "70rem",
    width: "100%",
    minHeight: "77rem",
    height: "100%",
    position: "absolute",
    backgroundColor: "#192330",
    transform: "skewY(-11deg)",
    [theme.breakpoints.down('lg')]: {
        minHeight: "90rem",
    },
    [theme.breakpoints.down('md')]: {
        minHeight: "120rem",
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: "115rem",
    },
    [theme.breakpoints.down('xs')]: {
        minHeight: "120rem",
    },
}))

const Card = styled(CenteredCol)(({theme}) => ({
    backgroundColor: "#192337",
    padding: "50px 100px",
    boxShadow: "15px 15px 20px #00000029",
    borderRadius: 10,
    [theme.breakpoints.down('lg')]: {
        padding: 40,
    },
    [theme.breakpoints.down('md')]: {
        padding: 30,
    },
    [theme.breakpoints.down('sm')]: {
        padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
        padding: 10,
    },
}))

const CardTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 10
}))

const ColumnTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10
}))

const Title = styled(SectionTitle)(({theme}) => ({
    fontSize: 80,
    fontWeight: "bold",
    color: theme.palette.common.white,
    paddingBottom: 20,
    paddingTop: 20,
    zIndex: 1,
}))


const SubTitle = styled(Typography)(({theme}) => ({
    fontSize: 60,
    fontWeight: "bold",
    color: theme.palette.common.white,
    paddingBottom: 20,
    paddingTop: 20,
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
        fontSize: 60,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 50,
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
    paddingTop: 150,
    alignItems: "center"
}))

const ColumnWrapper = styled(FlexRow)(({theme}) => ({
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down('md')]: {
        flexWrap: "wrap"
    },
}))

const Column = styled(FlexCol)(({theme}) => ({
    width: "33%",
    minWidth: 200,
    minHeight: 200,
    [theme.breakpoints.down('lg')]: {
        width: "100%"
    }
}))

const WhiteText = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white
}))

const PurpleText = styled(Typography)(() => ({
    color: "#BEAFFA"
}))

const OrangeText = styled(Typography)(() => ({
    color: "#FF9999"
}))

const TextWrapper = styled(FlexCol)(() => ({
    paddingTop: 5,
    paddingBottom: 5
}))

const TableContainer = styled(CenteredCol)(({theme}) => ({
    width: "100%",
    overflowX: "auto",
}))

const StyledTable = styled(Table)(() => ({
    maxWidth: 600,
    border: "1px solid white",
    borderCollapse: "collapse",
    "& td": {
        borderCollapse: "collapse",
        border: "1px solid white",
        padding: 10
    }
}))

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 40,
    width: "100%",
    borderRadius: 25,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 25,
        backgroundColor: theme.palette.mode === 'light' ? '#FF9999' : '#308fe8',
    },
}));

const ProgressWrapper = styled(CenteredCol)(({theme}) => ({
    zIndex: 1,
    paddingLeft: 300,
    paddingRight: 300,
    [theme.breakpoints.down('lg')]: {
        paddingLeft: 250,
        paddingRight: 250,
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: 200,
        paddingRight: 200,
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 10,
        paddingRight: 10,
    },
}))

const ProgressInfo = styled(CenteredRow)(() => ({
    zIndex: 1,
    width: "100%",
    marginTop: 30
}))

const LineText = styled(FlexRow)(({theme}) => ({
    zIndex: 1,
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 95,
    paddingRight: 80,
    [theme.breakpoints.down('lg')]: {
        padding: 0
    },
}))

const LineTextWrapper = styled(FlexCol)(() => ({
    zIndex: 1,
}))

const Line = styled('div')(() => ({
    zIndex: 1,
    borderTop: "8px solid #00D2C8",
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
}))

const FeedWrapper = styled(CenteredCol)(() => ({
    zIndex: 1,
    marginTop: 100,
}))

const FeedTitle = styled(WhiteText)(() => ({
    zIndex: 1,
    fontSize: 30
}))

const FeedText = styled(WhiteText)(() => ({
    zIndex: 1,
}))

const FeedInputWrapper = styled(FlexRow)(({theme}) => ({
    zIndex: 1,
    marginTop: 30,
    width: "100%",
    [theme.breakpoints.down('md')]: {
        flexWrap: "wrap"
    },
}))

const FeedInput = styled('input')(() => ({
    zIndex: 1,
    borderRadius: 25,
    width: "100%",
    padding: 12,
    ":focus": {
        outline: "none"
    }
}))

const FeedButton = styled(Button)(({theme}) => ({
    zIndex: 1,
    marginLeft: 20,
    borderRadius: 25,
    minWidth: 100,
    backgroundColor: "#FF9999",
    ":hover": {
        backgroundColor: "#00D2C8"
    },
    [theme.breakpoints.down('md')]: {
        width: "100%",
        marginLeft: 0,
        marginTop: 10,
    },
}))

const DocumentWrapper = styled(CenteredCol)(() => ({
    zIndex: 1,
    marginTop: 100
}))

const DocumentTitle = styled(SectionTitle)(({theme}) => ({
    color: theme.palette.common.white,
    zIndex: 1,
    textTransform: "uppercase",
    fontSize: 50
}))

const DocumentsButtonsWrapper = styled(CenteredRow)(({theme}) => ({
    zIndex: 1,
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.down('md')]: {
        flexWrap: "wrap"
    },
}))

const DocumentButton = styled(Button)(({theme}) => ({
    zIndex: 1,
    marginLeft: 20,
    color: theme.palette.common.black,
    fontWeight: "bold",
    borderRadius: 25,
    minWidth: 100,
    backgroundColor: theme.palette.common.white,
    ":hover": {
        color: theme.palette.common.white,
    }
}))

const WhitePaperButton = styled(DocumentButton)(() => ({
    ":hover": {
        backgroundColor: "#BEAFFA"
    }
}))

const PitchDeckButton = styled(DocumentButton)(() => ({
    ":hover": {
        backgroundColor: "#00D2C8"
    }
}))

const LegalButton = styled(DocumentButton)(() => ({
    ":hover": {
        backgroundColor: "#41B496"
    }
}))

const ArrowImage = styled('img')(() => ({
    zIndex: 1,
    marginTop: 50,
    marginBottom: 50,
    width: "auto",
    height: 50,
    cursor: "pointer"
}))

const PieCenterImage = styled('img')(({theme}) => ({
    position: 'absolute',
    height: 60,
    top: "47.5%",
    right: "48.5%",
    [theme.breakpoints.down('md')]: {
        top: "56.2%",
        right: "46.1%"
    },
    [theme.breakpoints.down('lg')]: {
        top: "53%",
        right: "47%",
    }
}))

export default function SaxTokenPage() {
    const {t} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(1);

    const onArrowClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    const onMousePieEnter = (_, index) => {
        setActiveIndex(index)
    }
    const poolText = t('saxTokenPage.poolItems', {returnObjects: true});

    return (
        <>
            <div style={{position: "relative"}}>
                <BackgroundLightBlue/>
            </div>
            <div style={{position: "relative"}}>
                <BackgroundDarkBlue/>
            </div>
            <StyledPageContainer>
                <LaunchAppButton isAppBar={false}/>
                <TitleWrapper>
                    <DollarImage src={DollarImg} alt="dollar-image"/>
                    <Title>{t('saxTokenPage.title')}</Title>
                </TitleWrapper>
                <Card>
                    <CardTitle>{t('saxTokenPage.cardTitle')}</CardTitle>
                    <ColumnWrapper>
                        <Column>
                            <ColumnTitle>
                                {t('saxTokenPage.generalInfos')}
                            </ColumnTitle>
                            {t('saxTokenPage.generalItems', {returnObjects: true}).map((object, index) => {
                                return (
                                    <TextWrapper key={`general-${index}`}>
                                        <WhiteText>{object.text}</WhiteText>
                                        {object.value && <PurpleText>{object.value}</PurpleText>}
                                    </TextWrapper>
                                );
                            })}
                        </Column>
                        <Column>
                            {/*<PieCenterImage src={SolaxImg} alt='solax'/>*/}
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        data={charData}
                                        cx="50%"
                                        cy="40%"
                                        innerRadius={60}
                                        fill="#BEAFFA"
                                        dataKey="value"
                                        onMouseEnter={onMousePieEnter}>
                                        <Label
                                            position="centerBottom" className='label-top'
                                            fontSize='27px'
                                        />
                                        {charData.map((entry, index) =>
                                            <Cell
                                                cursor="pointer"
                                                fill={index === activeIndex ? '#FF9999' : '#BEAFFA'}
                                                key={`cell-${index}`}/>)
                                        }
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </Column>
                        <Column>
                            <ColumnTitle>
                                {t('saxTokenPage.communityPool')}
                            </ColumnTitle>
                            <TextWrapper>
                                <WhiteText>{poolText[activeIndex].title}</WhiteText>
                                <OrangeText>{poolText[activeIndex].value}</OrangeText>
                            </TextWrapper>
                            <WhiteText>{t('saxTokenPage.lorem')}</WhiteText>
                        </Column>
                    </ColumnWrapper>
                    <CardTitle>{t('saxTokenPage.cardSubTitle')}</CardTitle>
                    <TableContainer>
                        <StyledTable>
                            <tbody>
                            <tr>
                                <td>
                                    <PurpleText>{t('saxTokenPage.stakingRewards')}</PurpleText>
                                </td>
                                <td>
                                    <WhiteText>{t('saxTokenPage.stakingValue')}</WhiteText>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>
                                    <PurpleText>{t('saxTokenPage.tradingDiscount')}</PurpleText>
                                </td>
                                <td style={{
                                    padding: 0
                                }}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            {t('saxTokenPage.tiresTitles', {returnObjects: true}).map((value, index) => {
                                                return (
                                                    <td key={`tires-title-${index}`}>
                                                        <PurpleText>{value}</PurpleText>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                            {t('saxTokenPage.tiresFirstValues', {returnObjects: true}).map((value, index) => {
                                                return (
                                                    <td key={`tires-first-${index}`}>
                                                        <WhiteText>{value}</WhiteText>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                            {t('saxTokenPage.tiresSecondValues', {returnObjects: true}).map((value, index) => {
                                                return (
                                                    <td key={`tires-second-${index}`}>
                                                        <WhiteText>{value}</WhiteText>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </StyledTable>
                    </TableContainer>
                </Card>
            </StyledPageContainer>
            <ProgressWrapper>
                <TitleWrapper>
                    <SubTitle>{t('saxTokenPage.secondTitle')}</SubTitle>
                </TitleWrapper>
                <BorderLinearProgress variant="determinate" value={10}/>
                <ProgressInfo>
                    <WhiteText style={{
                        minWidth: 85
                    }}>{t('saxTokenPage.start')}</WhiteText>
                    <Line/>
                    <WhiteText style={{
                        minWidth: 70
                    }}>{t('saxTokenPage.end')}</WhiteText>
                </ProgressInfo>
                <LineText>
                    <LineTextWrapper>
                        <WhiteText>{t('saxTokenPage.tokenPrice')}</WhiteText>
                        <PurpleText>{t('saxTokenPage.tokenPriceValue')}</PurpleText>
                    </LineTextWrapper>
                    <LineTextWrapper>
                        <WhiteText>{t('saxTokenPage.currentDiscount')}</WhiteText>
                        <PurpleText>{t('saxTokenPage.currentDiscountValue')}</PurpleText>
                    </LineTextWrapper>
                    <LineTextWrapper>
                        <WhiteText>{t('saxTokenPage.minimumInvestments')}</WhiteText>
                        <PurpleText>{t('saxTokenPage.minimumInvestmentsValue')}</PurpleText>
                    </LineTextWrapper>
                </LineText>
                <FeedWrapper>
                    <FeedTitle>{t('saxTokenPage.feedTitle')}</FeedTitle>
                    <FeedText>{t('saxTokenPage.feedText')}</FeedText>
                    <FeedInputWrapper>
                        <FeedInput placeholder={t('common.emailExample')}/>
                        <FeedButton
                            variant="contained">
                            {t('common.join')}
                        </FeedButton>
                    </FeedInputWrapper>
                </FeedWrapper>
                <DocumentWrapper>
                    <DocumentTitle>{t('common.documents')}</DocumentTitle>
                    <DocumentsButtonsWrapper>
                        <A href={whitePaper} target='_blank' rel='noopener noreferrer'>
                            <WhitePaperButton
                                variant="contained">
                                {t('saxTokenPage.whitePaperButton')}
                            </WhitePaperButton>
                        </A>
                        <A>
                            <PitchDeckButton
                                variant="contained">
                                {t('saxTokenPage.pitchDeckButton')}
                            </PitchDeckButton>
                        </A>
                        <A>
                            <LegalButton variant="contained">
                                {t('saxTokenPage.legalButton')}
                            </LegalButton>
                        </A>
                    </DocumentsButtonsWrapper>
                </DocumentWrapper>
                <ArrowImage
                    onClick={onArrowClick}
                    src={ArrowUpImg}
                    alt="Arrow-up-image"/>
            </ProgressWrapper>
        </>
    );
}

const renderActiveShape = (props) => {
    const {cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload} = props;

    return (
        <g>
            <svg x={cx - 25} y={cy - 22} textAnchor="middle" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                 viewBox="0 0 21.899 30">
                <g id="LOGO_ICON_01_1" transform="translate(10.95 15)">
                    <path id="Pfad_6655" data-name="Pfad 6655"
                          d="M10.713.048.372,4.416A.609.609,0,0,0,0,4.977V25.07a.609.609,0,0,0,.374.562l10.341,4.321a.608.608,0,0,0,.47,0l10.341-4.321a.609.609,0,0,0,.374-.562V4.977a.609.609,0,0,0-.372-.561L11.186.048A.609.609,0,0,0,10.713.048ZM3.151,6.467l5.9-2.494a.294.294,0,0,1,.409.271V5.872a.294.294,0,0,1-.086.208l-5.9,5.9a.3.3,0,0,1-.5-.208V6.738A.3.3,0,0,1,3.151,6.467ZM2.97,23.3v-2.93a.3.3,0,0,1,.5-.208L5.261,21.95a.608.608,0,0,0,.861,0L16,12.074a.3.3,0,0,1,.416,0L18.1,13.762a.294.294,0,0,1,0,.417L9.642,22.641a.609.609,0,0,0-.178.43v2.7a.294.294,0,0,1-.408.271l-5.9-2.467A.3.3,0,0,1,2.97,23.3Zm15.776.272-5.9,2.467a.3.3,0,0,1-.408-.271v-1.6a.3.3,0,0,1,.087-.208l5.9-5.9a.294.294,0,0,1,.5.208V23.3A.294.294,0,0,1,18.747,23.573ZM15.776,8.094,5.9,17.971a.3.3,0,0,1-.416,0L3.794,16.282a.294.294,0,0,1,0-.417L12.256,7.4a.608.608,0,0,0,.178-.43V4.245a.3.3,0,0,1,.409-.271l5.9,2.494a.294.294,0,0,1,.18.271V9.673a.294.294,0,0,1-.5.208L16.637,8.094A.609.609,0,0,0,15.776,8.094Z"
                          transform="translate(-10.95 -15)" fill="#fff"/>
                </g>
            </svg>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};