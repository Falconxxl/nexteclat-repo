import './Footer.css';
import logo_footer from '../Assets/2.Logo_NextEclat_short.png';
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (

        <>

          <div className="Container-Footer">
            <div className="Container-Footer-content1">
                <div className="Container-Footer-logoSlogan">
                    <img src={logo_footer} alt="flaconXXL-logo" className="logo-falcon-Footer"/>

                    <h1>
                        {t("Footer.CatTitle")}
                    </h1>

                    <button
                        onClick={() => setOpenQuote(true)}>
                        {t("ContainerBanner2.CatBouton")}
                    </button>

                    <RequestAQuoteModal open={openQuote} onClose={() => setOpenQuote(false)}>
                        <RequestAQuote />
                    </RequestAQuoteModal>
                </div >

                <div className="Container-Footer-links">

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            {t("Footer.Services")}
                        </h>

                        <NavLink to='/AudioVisual' className="Footer-links">
                            {t("NavbarMenu.Service.Audiovisual")}
                        </NavLink>

                        <NavLink to='/Photography' className="Footer-links">
                            {t("NavbarMenu.Service.Photography")}
                        </NavLink>

                        <NavLink to='/Webdesign' className="Footer-links">
                            {t("NavbarMenu.Service.Webdesign")}
                        </NavLink>

                        <NavLink to='/BrandIdentity' className="Footer-links">
                            {t("NavbarMenu.Service.Branding")}
                        </NavLink>

                        <NavLink to='/DigitalMarketing' className="Footer-links">
                            {t("NavbarMenu.Service.Digital Marketing")}
                        </NavLink>

                        <NavLink to='/Music' className="Footer-links">
                            {t("NavbarMenu.Service.Music Production")}
                        </NavLink>
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            Links
                        </h>

                        <NavLink to='/Projects' className="Footer-links">
                            {t("NavbarMenu.Projects")}
                        </NavLink>

                        <NavLink to='/About' className="Footer-links">
                            {t("NavbarMenu.About")}
                        </NavLink>

                        <NavLink to='/News' className="Footer-links">
                            {t("NavbarMenu.News")}
                        </NavLink>

                        <NavLink to='/Prices' className="Footer-links">
                            {t("NavbarMenu.Prices")}
                        </NavLink>

                        <NavLink to='/Contact' className="Footer-links">
                            {t("NavbarMenu.Contact")}
                        </NavLink>

                        <a
                            href="https://www.falconbeat.nl"
                            target="_blank"
                            style={{color:"#a09dfb"}}
                            rel="noopener noreferrer"
                            className="Footer-links"
                        >
                            Falcon Beat
                        </a>
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            {t("Footer.Extra")}
                        </h>

                        <NavLink to='/PrivacyPolicy' className="Footer-links">
                            {t("NavbarMenu.PrivacyPolicy")}
                        </NavLink>
                    </div>

                    <div className="Container-Footer-links-details-contact">
                        <h className="Footer-title">
                            {t("Footer.Contacts")}
                        </h>
                        <p className="Footer-title-details">
                            Tel:
                        </p>
                        <p className="Footer-title-details-small">
                            {t("Footer.Tel")}
                        </p>
                        <p className="Footer-title-details-small">
                            {t("Footer.Soon1")}
                        </p>
                        <p className="Footer-title-details-small">
                            {t("Footer.Soon2")}
                        </p>
                        <p className="Footer-title-details-small">
                            {t("Footer.Soon3")}
                        </p>

                        <p className="Footer-title-details">
                            Email:
                        </p>
                        <p className="Footer-title-details-small">
                            nexteclat.info@gmail.com
                        </p>
                    </div>
                </div>

                <div className="Container-Footer-SocialMedia">
                    <h className="Footer-title">
                        {t("Footer.SocialMedia")}
                    </h>
                    <div className="Footer-SocialMedia">
                        <a
                            href="https://www.instagram.com/nexteclat.digital?igsh=dGlzeW1hMmEwbm5t&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="https://youtube.com/@nexteclat?si=JwEO3lzG5odxCku_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="https://www.tiktok.com/@nexteclat.digital?_r=1&_t=ZG-95SJ0Xoz2tk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="https://www.behance.net/michealilunga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Behance"
                        >
                            <i className="fa-brands fa-square-behance"></i>
                        </a>


                        <a
                            href="https://dribbble.com/nexteclat-info"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Dribbble"
                        >
                            <i className="fa-brands fa-dribbble"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/nexteclat/about/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>


                        <a
                            href="https://open.spotify.com/user/31zx5mzrgc35qi44xl4weluuedqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Spotify"
                        >
                            <i className="fa-brands fa-spotify"></i>
                        </a>


                        <a
                            href="https://x.com/nexteclat?s=21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="X (Twitter)"
                        >
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="Container-Footer-content2">
                <p>
                    {t("Footer.WebsiteDevelopedBy")} <strong>NextÉclat</strong><br/>
                    <i className="fa-regular fa-copyright"></i>&nbsp;
                     2026 <strong>NextÉclat</strong> | {t("Footer.AllRightsAreReserved")}
                </p>
            </div>
        </div>
      </>
    );
}

export default Footer;