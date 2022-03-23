import * as React from 'react';
import {useState} from 'react';
import {default as MuiAppBar} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {styled} from "@mui/material/styles";
import {FlexRow} from "../Flex";
import {Box, IconButton, Menu, MenuItem} from "@mui/material";
import {useTranslation} from "react-i18next";
import SolaxImg from "../../assets/images/mini-solax.png"
import GithubIcon from "../../assets/images/logoSolaX.svg";
import DiscordIcon from "../../assets/images/discord.svg";
import TwitterIcon from "../../assets/images/twiter.svg";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import LaunchAppButton from "../buttons/LaunchApp";
import MoreIcon from '@mui/icons-material/MoreVert';

function ElevationScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const SocialIcon = styled('img')(({theme}) => ({
    height: 20,
    width: "auto",
    cursor: "pointer",
    margin: 10,
}))

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    justifyContent: "space-between",
    padding: `${theme.spacing(0)} ${theme.spacing(2)}`
}))
const LogoWrapper = styled(FlexRow)(() => ({
    cursor: "pointer"
}))
const MenuItemsWrapper = styled(FlexRow)(() => ({}))
const RightWrapper = styled(FlexRow)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
}))

const StyledMuiAppBar = styled(MuiAppBar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main
}))

const Logo = styled('img')(() => ({
    height: 30,
    width: "auto"
}))

const StyledMenuItem = styled(MenuItem)(({theme}) => ({
    margin: "0px 10px",
    borderRadius: 20,
    width: 150,
    justifyContent: "center",
    backgroundColor: theme.palette.common.orange,
    ":hover": {
        backgroundColor: "#BEAFFA",
        border: "none"
    },
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
}))

const MobileMenu = styled(Menu)(() => ({
    "& ul": {
        padding: 0
    }
}))

const MobileMenuItem = styled(MenuItem)(({theme}) => ({
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    ":hover": {
        backgroundColor: "#BEAFFA",
        border: "none"
    },
}))

export default function AppBar(props) {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const onMenuItemClick = (page) => {
        navigate(page);
        handleMobileMenuClose();
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const onLinkClick = (url) => {
        handleMobileMenuClose();
    }

    const onHomeClicked = () => {
        navigate(ROUTES.HOME_ROUTE)
    }

    const renderMobileMenu = (
        <MobileMenu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MobileMenuItem onClick={() => onMenuItemClick(ROUTES.HOME_ROUTE)}>
                {t('appBar.home')}
            </MobileMenuItem>
            <MobileMenuItem onClick={() => onMenuItemClick(ROUTES.SAX_TOKEN_ROUTE)}>
                {t('appBar.saxToken')}
            </MobileMenuItem>
            <MobileMenuItem onClick={() => onLinkClick("")}>
                <SocialIcon
                    src={GithubIcon}
                    alt="github-icon"/>
            </MobileMenuItem>
            <MobileMenuItem onClick={() => onLinkClick("")}>
                <SocialIcon
                    src={DiscordIcon}
                    alt="discord-icon"/>
            </MobileMenuItem>
            <MobileMenuItem onClick={() => onLinkClick("")}>
                <SocialIcon
                    src={TwitterIcon}
                    alt="twitter-icon"/>
            </MobileMenuItem>
        </MobileMenu>
    );

    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <StyledMuiAppBar>
                    <StyledToolbar>
                        <LogoWrapper onClick={onHomeClicked}>
                            <Logo src={SolaxImg} alt="logo"/>
                        </LogoWrapper>
                        <MenuItemsWrapper>
                            <LaunchAppButton isAppBar={true}/>
                            <StyledMenuItem onClick={() => onMenuItemClick(ROUTES.HOME_ROUTE)}>
                                {t('appBar.home')}
                            </StyledMenuItem>
                            <StyledMenuItem onClick={() => onMenuItemClick(ROUTES.SAX_TOKEN_ROUTE)}>
                                {t('appBar.saxToken')}
                            </StyledMenuItem>
                        </MenuItemsWrapper>
                        <RightWrapper>
                            <a href="www.google.com"
                               target="_blank">
                                <SocialIcon
                                    src={GithubIcon}
                                    alt="github-icon"/>
                            </a>
                            <a href="www.google.com"
                               target="_blank">
                                <SocialIcon
                                    src={DiscordIcon}
                                    alt="discord-icon"/>
                            </a>
                            <a href="www.google.com"
                               target="_blank">
                                <SocialIcon
                                    src={TwitterIcon}
                                    alt="twitter-icon"/>
                            </a>
                        </RightWrapper>
                        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </Box>
                    </StyledToolbar>
                </StyledMuiAppBar>
            </ElevationScroll>
            {renderMobileMenu}
        </React.Fragment>
    );
}