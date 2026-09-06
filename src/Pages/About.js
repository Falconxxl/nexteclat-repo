import { Helmet } from 'react-helmet-async';
import './About.css';
import NavbarMenu from "../Layout/NavbarMenu";

import { useTranslation } from "react-i18next";

import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";

import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO_correct2.mp4";
import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile 32 MB).mp4";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import Michea_pic_about from "../Images/michael_pic1.jpg";
import pic_about_tel1 from "../Images/pic_about_tel1b.jpg";
import WhyUs from "../Layout/WhyUs";
import CertificationMichael from "../Layout/CertificationMichael";
import OurTeamAbout from "../Layout/OurTeamAbout";
import WhatsappFunction from "../Components/WhatsappFunction";
import Experience from "../Layout/Experience";
import Testimony from "../Layout/Testimony";

function About() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    // ✅ ICON CHECK GLOBAL (BLANC + VIOLET)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#7856f4" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.About.title")}</title>
                <meta name="description" content={t("HelmetSEO.About.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/About" />
            </Helmet>

            <div>
                {loading && <PageLoader />}

                <div className={`about-wrapper ${loading ? "hidden" : "visible"}`}>

                    <NavbarMenu/>
                    <NavbarMenuMobile/>

                    <div className="container-top"></div>

                    {/* BANNER */}
                    <div className="section-drone-video" style={{ backgroundColor: "#e8e7ff" }}>
                        <div className="texte-drone" style={{ backgroundColor: "#e8e7ff" }}>

                            <h1 style={{ fontSize: "48px", lineHeight:1.1 , marginTop:"20px",
                                marginBottom:"20px",fontWeight:400, color:"black"}}>
                                {t("About.Banner.Title")}
                            </h1>

                            <p style={{color:"black"}}>
                                {t("About.Banner.Content")}
                            </p>

                            <button
                                className="Drone-quote-button-about"
                                onClick={() => setOpenQuote(true)}
                                style={{backgroundColor: "#7856f4",color:"white", border:"1px solid #7856f4"}}
                            >
                                {t("ContainerBanner2.CatBouton")}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                            <RequestAQuoteModal
                                open={openQuote}
                                onClose={() => setOpenQuote(false)}
                            >
                                <RequestAQuote />
                            </RequestAQuoteModal>

                        </div>

                        <div className="wrapper-drone-video">
                            <video className="drone-video-desktop" src={video_drone} autoPlay muted loop playsInline />
                            <video className="drone-video-mobile" src={video_drone_mobile} autoPlay muted loop playsInline />
                        </div>
                    </div>

                    {/* WHO ARE WE */}
                    <div className="Section-WhoAreWe" style={{background:"black"}}>
                        <div className="WhoAreWe-left">
                            <h1>{t("About.WhoAreWe.Title")}</h1>
                        </div>

                        <div className="WhoAreWe-right">

                            <p className="WhoAreWe-title" style={{color:"white", fontSize:"18px", fontWeight:"400"}}>
                                <strong style={{color:"#b4b3ff"}}> NextÉclat </strong>
                                {t("About.WhoAreWe.Subtitle2")}
                            </p>

                            <div className="WhoAreWe-text">

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine1a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine1b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine2a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine2b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine3a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine3b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine4a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine4b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine5a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine5b")}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RESTE DU CODE INCHANGÉ */}
                    <section className="audiovisual-direction-Mike" style={{
                        borderBottom: "0px solid",
                        borderImage: "linear-gradient(to right, #f9e054, #cb954d) 1",
                        paddingBottom:"0px",
                        backgroundColor:"white"
                    }}>
                        <div className="direction-Mike-inner"
                             style={{width:"100%", maxWidth:"1400px", borderBottom: "1px solid #5c3be8"}}>
                            <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                                <img src={Michea_pic_about} alt="Mike giving direction during a shoot"
                                     style={{width:"400px"}}/>
                            </div>

                            <div className="audiovisual-direction-text" style={{padding:"20px"}}>
                                <h1 style={{color:"#5c3be8"}}>
                                    {t("FounderMichael.BigTitle")}
                                </h1>

                                <p style={{color:"black", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                    {t("FounderMichael.Paragraphe1")}<br/><br/>
                                    {t("FounderMichael.Paragraphe2")}<br/><br/>
                                    {t("FounderMichael.Paragraphe3")}<br/><br/>
                                    {t("FounderMichael.Paragraphe4")}
                                </p>
                            </div>
                        </div>
                    </section>

                    <CertificationMichael/>

                    <section className="audiovisual-direction-Mike" style={{backgroundColor:"black"}}>
                        <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>

                            <div className="audiovisual-direction-text" style={{backgroundColor:"black", padding:"20px"}}>
                                <h1 style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.OurMission")}
                                </h1>

                                <h2 style={{color:"#a7a3fc", fontWeight:"400", fontSize:"21px", marginBottom:"20px"}}>
                                    {t("MissionVision.Subtitle1")}
                                </h2>

                                <p style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.Content1")}
                                </p>

                                <h2 style={{color:"#a7a3fc", fontWeight:"400", fontSize:"21px", marginBottom:"20px"}}>
                                    {t("MissionVision.Subtitle2")}
                                </h2>

                                <p style={{color:"white"}}>
                                    {t("MissionVision.Content2")}
                                </p>

                                <h1 style={{color:"white", marginBottom:"30px", marginTop:"30px"}}>
                                    {t("MissionVision.OurVision")}
                                </h1>

                                <h2 style={{color:"#a7a3fc", fontWeight:"400", fontSize:"21px", marginBottom:"30px"}}>
                                    {t("MissionVision.Subtitle3")}
                                </h2>

                                <p style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.Content3")}
                                </p>

                                <h2 style={{color:"#a7a3fc", fontWeight:"400", fontSize:"21px", marginBottom:"30px"}}>
                                    {t("MissionVision.Subtitle4")}
                                </h2>

                                <p style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.Content4")}
                                </p>
                            </div>

                            <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                                <img src={pic_about_tel1} alt="Mike giving direction during a shoot"
                                     style={{width:"400px"}}/>
                            </div>

                        </div>
                    </section>

                    <OurTeamAbout/>
                    <OurWorkflow/>
                    <WhyUs/>
                    <Experience/>
                    <Testimony/>
                    <WhatsappFunction/>
                    <Footer/>

                </div>
            </div>
        </>
    );
}

export default About;