import React from "react";
import Header from "./components/Header";
import {PageContainer} from "../../components/Flex";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import SaxTokenSection from "./components/SaxTokenSection";

export default function HomePage() {
    return (
        <PageContainer>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <SaxTokenSection/>
            <ThirdSection/>
        </PageContainer>
    );
}