import { Helmet } from 'react-helmet-async';
import './News.css';
import NavbarMenu from "../Layout/NavbarMenu";

import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import React, {useEffect, useState} from "react";
import WhatsappFunction from "../Components/WhatsappFunction";

// import video_drone from "../MyVideos/DRONE_SHOT_VIDEO.mp4";
// import video_drone_mobile from "../MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";

import { useTranslation } from "react-i18next";
import Ads from "../Layout/Ads";

import video_boucle_banner from "../../src/MyVideos/z_banner40 (quality 24MB 2).mp4";
import video_boucle_banner_mobile from "../../src/MyVideos/Banner_Site_ boucle (Mobile 28MB).mp4";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

// import gotflow from "../Images/who-got-bars.png";
// import gotflow_mobile from "../Images/who-got-bars-mobile2.png";

import sozacom from "../Images/sozacom4.png";
import PageLoader from "../Components/PageLoader";
import NewsPartnership from "../Layout/Newspartnership";

function News() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule le chargement (vidéos lourdes)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            <Helmet>
                <title>{t("HelmetSEO.News.title")}</title>
                <meta name="description" content={t("HelmetSEO.News.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/News" />
            </Helmet>

            {loading && <PageLoader />}

    <div >
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            {/*----------------Section-Recrutement (Global)-----------------*/}

            <NewsPartnership/>

            {/*----------------Section (Who got Bars)-----------------*/}

            <section className="gotflow-wrapper">
                <div className="gotflow-container">
                    <div className="gotflow-flyer">
                        <div className="gotflow-content">
                            <p className="gotflow-text">
                                {t("Page-news.GotFlow.ContentLine1")}
                                <strong style={{ color: "#f9db4d" }}> Falcon Beat </strong>
                                {t("Page-news.GotFlow.ContentLine2")}
                            </p>

                            {/*<button className="gotflow-btn">*/}
                            {/*    {t("Page-news.GotFlow.BtnLine")}*/}
                            {/*</button>*/}
                            <a
                                href="https://www.youtube.com/@whogotflow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gotflow-btn"
                            >
                                {t("Page-news.GotFlow.BtnLine")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------FalconBeat (Ads)-----------------*/}

            <Ads/>

            {/*----------------Relook ton Bussiness-----------------*/}

            <section className="Relook-wrapper">
                <div className="Relook-container">
                    <div className="Relook-flyer">
                        <div className="Relook-content">
                            <p className="Relook-text">
                                <strong style={{color:"#f3bb2f"}}>{t("Page-news.Relook.ContentLine0")}</strong>
                                {t("Page-news.Relook.ContentLine1")}
                            </p>

                            {/*<button className="Relook-btn">*/}
                            {/*    {t("Page-news.Relook.BtnLine")}*/}
                            {/*</button>*/}
                            <a
                                href="https://www.youtube.com/@relooktonbusiness"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="Relook-btn"
                            >
                                {t("Page-news.Relook.BtnLine")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------FalconXXL (Reseaux sociaux)-----------------*/}

            {/*----------------FalconXXL (Banner Audiovisual)-----------------*/}

            <header className="AudioVisual-banner">
                <video autoPlay muted loop playsInline className="AudioVisual-video-news desktop-video"
                       // style={{Top:"19vh"}}
                >
                    <source src={video_boucle_banner} type="video/mp4"/>
                </video>

                <video autoPlay muted loop playsInline className="AudioVisual-video-news mobile-video">
                    <source src={video_boucle_banner_mobile} type="video/mp4"/>
                </video>

                <div className="AudioVisual-content">
                    <button
                        className="cta-btn-AudioVisual"
                        onClick={() => setOpenQuote(true)}
                    >
                        {t("ContainerBanner2.CatBouton")}
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>
                </div>
            </header>

            {/*----------------FalconXXL (Bientot à Kinshasa)-----------------*/}

            {/*<section className="kinshasa-wrapper">*/}
            {/*    <div className="kinshasa-container">*/}

            {/*        /!* Image à gauche *!/*/}
            {/*        <div className="kinshasa-image">*/}
            {/*            <img src={sozacom} alt="Projet Kinshasa" />*/}
            {/*        </div>*/}

            {/*        /!* Textes à droite *!/*/}
            {/*        <div className="kinshasa-content">*/}
            {/*            <h2 className="kinshasa-title"*/}
            {/*            style={{color:"black"}}> {t("Page-news.Kinshasa.Title")}</h2>*/}
            {/*            <p className="kinshasa-text">*/}
            {/*                {t("Page-news.Kinshasa.ContentLine1")}*/}
            {/*            </p>*/}
            {/*            <p className="kinshasa-text">*/}
            {/*                {t("Page-news.Kinshasa.ContentLine2")}*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</section>*/}




            {/*<div className="Container-Contact">*/}
            {/*    <div className="Container-Contact-text">*/}
            {/*        <h1>{t("News.Title")}</h1>*/}
            {/*        <h2>{t("News.Subtitle")}</h2>*/}
            {/*        <p style={{width:"400px"}}>*/}
            {/*            {t("News.ContentLine")}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*---------------Section Drone----------------*/}
            {/*<div className="section-drone-video">*/}
            {/*    <div className="texte-drone">*/}
            {/*        <h1>Aerial Shots</h1>*/}
            {/*        <h2>Cinematic 4K Drone Footage that makes the difference</h2>*/}
            {/*        <p>*/}
            {/*            Thanks to our 4K drones, we capture spectacular aerial footage*/}
            {/*            for your music videos, commercials, and visual projects.*/}
            {/*        </p>*/}
            {/*        <button className="Drone-quote-button">*/}
            {/*            Request a Quote <i className="fa-solid fa-arrow-right"></i>*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    <div className="wrapper-drone-video">*/}
            {/*        <video*/}
            {/*            className="drone-video-desktop"*/}
            {/*            src={video_drone}*/}
            {/*            autoPlay*/}
            {/*            muted*/}
            {/*            loop*/}
            {/*            playsInline*/}
            {/*        />*/}
            {/*        <video*/}
            {/*            className="drone-video-mobile"*/}
            {/*            src={video_drone_mobile}*/}
            {/*            autoPlay*/}
            {/*            muted*/}
            {/*            loop*/}
            {/*            playsInline*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<TopButton/>*/}
            <WhatsappFunction/>
            <Footer/>
        </div>

        </>
    );
}

export default News;