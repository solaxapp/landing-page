import {Outlet} from "react-router-dom";
import AppBar from "../components/AppBar";
import * as React from "react";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <AppBar/>
            <>
                <Outlet/>
            </>
            <Footer/>
        </>
    );
}