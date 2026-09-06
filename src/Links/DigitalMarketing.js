import { Helmet } from 'react-helmet-async';
import './DigitalMarketing.css';
import '../Layout/WhyUs.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";

import desktop_banner_photograhy from "../Images/background_digital_marketing5e.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile6e.jpg";

import {Link} from "react-scroll";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import OurWorkflow from "../Layout/OurWorkflow";
import PricingDigitalMarketing from "../Layout/PricingDigitalMarketing";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import WhatsappFunction from "../Components/WhatsappFunction";
import Experience from "../Layout/Experience";

function DigitalMarketing() {

    const { t } = useTranslation();
    const [openQuote, setOpenQuote] = useState(false);

    // ✅ ICON FIX (IDENTIQUE À TON AUTRE PAGE)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#7856f4" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.DigitalMarketing.title")}</title>
                <meta name="description" content={t("HelmetSEO.DigitalMarketing.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/DigitalMarketing" />
            </Helmet>

            <div className="Container-DigitalMarketing">
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                <div className="Container-webdesign">

                    <img src={desktop_banner_photograhy} alt="Banner desktop" className="Webdesign-banner desktop-image"/>
                    <img src={mobile_banner} alt="Banner mobile" className="Webdesign-banner mobile-image"/>

                    <div className="hero-content-webdesign">

                        <h1 style={{color:"black"}}>
                            {t("DigitalMarketing.Banner.Title")}
                        </h1>

                        <p className="webdesign-paragraphe-desktop" style={{color:"black"}}>
                            {t("DigitalMarketing.Banner.Content1")}<br/>
                            {t("DigitalMarketing.Banner.Content2")}<br/>
                            {t("DigitalMarketing.Banner.Content3")}
                        </p>

                        <p className="webdesign-paragraphe-mobile" style={{color:"black", fontSize:"17px"}}>
                            {t("DigitalMarketing.Banner.Content")}
                        </p>

                        <button className="cta-btn-webdesign" onClick={() => setOpenQuote(true)}>
                            {t("ContainerBanner2.CatBouton")}
                        </button>

                        <RequestAQuoteModal open={openQuote} onClose={() => setOpenQuote(false)}>
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    <Link to="AudioVisual-Description" className="scroll-down-webdesign"
                          style={{border:"2px solid #918efb"}}
                          offset={-90} duration={500} spy={true} smooth={true} >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                <Experience/>

                {/* DESCRIPTION */}
                <div className="AudioVisual-Description">

                    <div className="AudioVisual-Description-left">
                        <p>{t("DigitalMarketing.Description.Title")}</p>
                    </div>

                    <div className="AudioVisual-Description-Right">
                        <p>{t("DigitalMarketing.Description.Content")}</p>
                    </div>

                </div>

                {/* SERVICES */}
                <div className="Container-WhyUs">

                    <div className="Container-WhyUs-left">
                        <h1>{t("DigitalMarketing.TypeServicesDigitalMarketing.Title")}</h1>
                    </div>

                    <div className="Container-WhyUs-right">

                        {/* ===== BLOC 1 ===== */}
                        <div className="Container-WhyUs-right-content">
                            <div className="Container-WhyUs-right-title">
                                {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.Title")}
                            </div>

                            <div className="Container-WhyUs-right-paragraf">

                                {[1,2,3,4,5,6].map((i) => (
                                    <div className="icon-text" key={i}>
                                        <CheckIcon />
                                        <p>
                                            {t(`DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine${i}`)}
                                        </p>
                                    </div>
                                ))}

                                <div className="icon-text">
                                    <p>
                                        {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine7")}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* ===== BLOC 2 ===== */}
                        <div className="Container-WhyUs-right-content">
                            <div className="Container-WhyUs-right-title">
                                {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.Title")}
                            </div>

                            <div className="Container-WhyUs-right-paragraf">

                                {[1,2,3,4,5,6,7].map((i) => (
                                    <div className="icon-text" key={i}>
                                        <CheckIcon />
                                        <p>
                                            {t(`DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine${i}`)}
                                        </p>
                                    </div>
                                ))}

                                <div className="icon-text">
                                    <p>
                                        {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine8")}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



                <PricingDigitalMarketing/>
                <OurWorkflow/>
                <WhatsappFunction/>
                <Footer/>
            </div>
        </>
    );
}

export default DigitalMarketing;