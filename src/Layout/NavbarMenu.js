
import './NavbarMenu.css';
import {NavLink} from "react-router-dom";
import logo from '../Assets/2.Logo_NextEclat_Navbar.png';
import React from 'react';
// import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../Components/LanguageDropdown"
// import { FaTimes, FaBars } from "react-icons/fa";


function NavbarMenu() {

    // const [click, setClick] = useState(false)
    // const closeMenu = () => setClick(false)

    // -----------------------------------------------------------------------------------

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ------------------------languages selector--------------------------------------

    const { i18n, t } = useTranslation();

    // --------------------------------------------------------------

    return (

        <>

          <div className="Navbar1">

            <div className="Container-NavbarMenu">

                <NavLink
                    to="/"
                    className="logo-menu"
                    onClick={scrollToTop}
                >
                    <img
                        src={logo}
                        alt="flaconXXL-logo"
                        className="logo-falcon-NavMenu"
                    />
                </NavLink>

                <ul className='Container-buttons-NavbarMenu'>

                    <li>
                        <div className="dropdown button-Menu"
                             spy={true} smooth={true} offset={50} duration={500}
                             // onClick={closeMenu} id='nav-item'
                        >
                            {t("NavbarMenu.Services")}

                            <div className="dropdown-content">
                                <NavLink className="Services-Link" to="/AudioVisual">
                                    {t("NavbarMenu.Service.Audiovisual")}
                                </NavLink>

                                <NavLink className="Services-Link" to="/Photography">
                                    {t("NavbarMenu.Service.Photography")}
                                </NavLink>

                                <NavLink className="Services-Link" to="/Webdesign" >
                                    {t("NavbarMenu.Service.Webdesign")}
                                </NavLink>

                                <NavLink className="Services-Link" to="/BrandIdentity">
                                    {t("NavbarMenu.Service.Branding")}
                                </NavLink>

                                <NavLink className="Services-Link" to="/DigitalMarketing">
                                    {t("NavbarMenu.Service.Digital Marketing")}
                                </NavLink>

                                <NavLink className="Services-Link" to="/Music">
                                    {t("NavbarMenu.Service.Music Production")}
                                </NavLink>
                            </div>
                        </div>
                    </li>

                    <li>
                        <NavLink  to='/Projects' className="button-Menu" activeClassName="active-link">
                            {t("NavbarMenu.Projects")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink  to='/About' className="button-Menu" activeClassName="active-link">
                            {t("NavbarMenu.About")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink  to='/News' className="button-Menu" activeClassName="active-link">
                            {t("NavbarMenu.News")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink  to='/Prices' className="button-Menu" activeClassName="active-link">
                            {t("NavbarMenu.Prices")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink  to='/Contact' className="button-Menu" activeClassName="active-link">
                            {t("NavbarMenu.Contact")}
                        </NavLink>
                    </li>

                    <li>
                        <a
                            href="https://www.falconbeat.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-Menu"
                        >
                            Falcon Beat
                        </a>

                    </li>
                </ul>


                <div className='Container-ContactUs-Languages'>
                    <NavLink to='/Contact' className="button-menu-ContactUs">
                        {t("NavbarMenu.ContactUs")}
                    </NavLink>

                    {/*------------------selector languages-------------------------------------*/}

                    <div className="container-languages">
                        <LanguageDropdown i18n={i18n} />
                    </div>

                </div>
            </div>

        </div>

        </>
    );
}

export default NavbarMenu;