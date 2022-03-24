import React from "react";
import {createTheme} from "@mui/material";
import {muiCustomTheme} from "./assets/theme";
import {ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import SaxTokenPage from "./pages/SaxTokenPage";

function App() {
    const theme = createTheme(muiCustomTheme("light"));
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route
                    path={ROUTES.HOME_ROUTE}
                    element={
                        <Layout/>
                    }>
                    <Route
                        index
                        element={
                            <HomePage/>
                        }/>
                    <Route
                        path={ROUTES.SAX_TOKEN_ROUTE}
                        element={
                            <SaxTokenPage/>
                        }/>

                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
