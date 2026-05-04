import './Hamburger.css';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hamburger({ menuOpen, setMenuOpen }) {

    const { t } = useTranslation();
    const [servicesOpen, setServicesOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    return (
        <div className="navbar-hamburger">
            <button
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <button
                            className="menu-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                        </button>

                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>
                            <li>
                                <NavLink to='/AudioVisual' className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Audiovisual")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Photography' className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Photography")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Webdesign" className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Webdesign")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/BrandIdentity" className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Branding")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/DigitalMarketing' className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Digital Marketing")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Music" className="Submenu-button-hamburger" onClick={closeMenu}>
                                    {t("NavbarMenu.Service.Music Production")}
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <NavLink to='/Projects' className="menu-button" onClick={closeMenu}>
                            {t("NavbarMenu.Projects")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className="menu-button" onClick={closeMenu}>
                            {t("NavbarMenu.About")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Prices' className="menu-button" onClick={closeMenu}>
                            {t("NavbarMenu.Prices")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/News' className="menu-button" onClick={closeMenu}>
                            {t("NavbarMenu.News")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' className="menu-button" onClick={closeMenu}>
                            {t("NavbarMenu.Contact")}
                        </NavLink>
                    </li>
                    <li>

                    <a
                        href="https://www.falconbeat.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-button"
                        onClick={closeMenu}
                        >
                        Falcon Beat
                    </a>
                </li>
            </ul>
        </nav>
</div>
);
}

export default Hamburger;