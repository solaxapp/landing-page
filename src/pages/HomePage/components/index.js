import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {PageContainer} from "../../../components/Flex";

export const SectionTitle = styled(Typography)(({theme})=>({
    fontSize: 80,
    fontWeight: "bold",
    color: theme.palette.common.black,
    paddingBottom: 20,
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

export const SectionSubTitle = styled(Typography)(({theme})=>({
    fontSize: 25,
    color: theme.palette.common.white,
    padding: 20,
    textAlign: "justify"
}))

export const SectionContainer = styled(PageContainer)(({theme})=>({
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 100px 100px 100px"
}))